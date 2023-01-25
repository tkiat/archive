const { dest, parallel, series, src, watch } = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const merge = require('merge-stream');
const exec = require('child_process').exec;

const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

const paths = [
	{ext:'css', srcFile: './src/css/*.css', destFolder: './build/css/'},
	{ext:'scss', srcFile: './src/scss/*.scss', destFolder: './build/css/'},
	{ext:'scss', srcFile: './src/scss/component/*.scss', destFolder: './build/css/'},
	{ext:'html', srcFile: './src/html/*.html', destFolder: './build/html/'},
	{ext:'js', srcFile: './src/js/component/*.js', destFolder: './build/js/'},
	{ext:'js', srcFile: './src/js/*.js', destFolder: './build/js/'}
];

function genJSON(cb) {
	exec('node generate-blog-structure.js && node generate-proj-structure.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

function server(cb) {
	exec('go build server.go && ./server', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

function minify(srcFile, destFolder, ext) {
	switch(ext){
		case 'css':
			return minifyCSS(srcFile, destFolder);
		case 'scss':
			return minifySCSS(srcFile, destFolder);
		case 'html':
			return minifyHTML(srcFile, destFolder);
		case 'js':
			return minifyJS(srcFile, destFolder);
		default:
			console.err('invalid file extension');
			return 0;
	}
}

function minifyCSS(srcFile, destFolder) {
	var plugins = [
		autoprefixer(),
		cssnano()
	];
	return src(srcFile)
		.pipe(postcss(plugins))
		.pipe(rename({suffix: '.min'}))
		.pipe(dest(destFolder));
}

function minifySCSS(srcFile, destFolder) {
	var plugins = [
		autoprefixer(),
		cssnano()
	];
	return src(srcFile)
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(postcss(plugins))
		.pipe(rename({suffix: '.min'}))
		.pipe(dest(destFolder));
}

function minifyHTML(srcFile, destFolder) {
	return src(srcFile)
		.pipe(htmlmin({collapseWhitespace: true }))
		.pipe(rename({suffix: '.min'}))
		.pipe(dest(destFolder));
}

function minifyJS(srcFile, destFolder) {
	//transpile then minify
	return src(srcFile)
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(dest(destFolder));
}

function minifyAllManual() {
	let tasks = paths.map(path => minify(path.srcFile, path.destFolder, path.ext));
	return merge(tasks);
}

function minifyAllWatch() {
	paths.map(function(path) {
		watch(path.srcFile).on('change', file => {
			minify(file, path.destFolder, path.ext)
			console.log(file + ' minified to folder ' + path.destFolder);
		});
	});
}

exports.dev = series(genJSON, parallel(server, minifyAllWatch));
exports.prod = server;
exports.update = series(genJSON, minifyAllManual);
