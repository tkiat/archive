const { dest, parallel, series, src, watch } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const merge = require('merge-stream')

const exec = require('child_process').exec

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const paths = [
	{ext:'scss', srcFile: './src/style/*.scss', destFolder: './build/style/'},
	{ext:'js', srcFile: './src/script/*.js', destFolder: './build/script/'},
	{ext:'js', srcFile: './src/component/*.js', destFolder: './build/script/'}
]

function minify(srcFile, destFolder, ext) {
	switch(ext){
// 		case 'css':
// 			return minifyCSS(srcFile, destFolder)
		case 'scss':
			return minifySCSS(srcFile, destFolder)
		case 'js':
			return minifyJS(srcFile, destFolder)
// 		case 'html':
// 			return minifyHTML(srcFile, destFolder)
		default:
			console.err('invalid file extension')
			return 0
	}
}

function minifySCSS(srcFile, destFolder) {
	var plugins = [
		autoprefixer(),
		cssnano()
	]
	return src(srcFile)
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(postcss(plugins))
		.pipe(rename({suffix: '.min'}))
		.pipe(dest(destFolder))
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
	let tasks = paths.map(path => minify(path.srcFile, path.destFolder, path.ext))
	return merge(tasks)
}

function minifyAllWatch() {
	paths.map(function(path) {
		watch(path.srcFile).on('change', file => {
			minify(file, path.destFolder, path.ext)
			console.log(file + ' minified to folder ' + path.destFolder)
		})
	})
}

exports.default = minifyAllWatch
	// parallel(server, minifyAllManual)
