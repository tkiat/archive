const aws = require('aws-sdk')

const codecommit = new aws.CodeCommit({ apiVersion: '2015-04-13' })
const documentClient = new aws.DynamoDB.DocumentClient({apiVersion: '2012-08-10'})
const s3 = new aws.S3({apiVersion: '2006-03-01'})

function deleteItemFromDatabase(params) {
	return documentClient.delete(params, function(err) {
		if (err) console.log("Can't delete from dynamoDB. ", err, err.stack);
	}).promise()
}
function deleteObjectFromS3(params) {
	return s3.deleteObject(params, function(err) {
		if (err) console.log("Can't delete from S3. ", err, err.stack);
	}).promise()
}
function getDifferencesFromLastCommit(params) {
	return new Promise((resolve, reject) => {
		codecommit.getDifferences(params, function(err, data) {
			if (err) {
				console.log("Can't get difference from last commit. ", err, err.stack);
				reject(err)
			} else {
				resolve(data.differences)
			}
		})
	})
}
function getFileContentFromNewCommit(params) {
	return new Promise((resolve, reject) => {
		codecommit.getFile(params, function(err, data) {
			if (err) {
				console.log("Can't get file content from new commit", err, err.stack);
				reject(null)
			}
			else resolve(data)
		})
	})
}
function getParentCommitId(params) {
	return new Promise((resolve, reject) => {
		codecommit.getCommit(params, function(err, data) {
			if (err) {
				console.log("Can't get parent commit id", err, err.stack);
				reject(err)
			} else {
				resolve(data.commit.parents[0])
			}
		})
	})
}
function getToday() {
	let y = new Date().getFullYear()
	let m = new Date().getMonth() + 1
	let d = new Date().getDate()
	y = '' + y
	m = (m < 10 ? '0' : '') + m
	d = (d < 10 ? '0' : '') + d
	return [y, m, d].join('-')
}
function parsePath(path) {
	const arr = path.split('/')
	if (arr.length === 5 && arr[0] === 'article') {
		return {
			type: arr[0],
			category: arr[1] + '/' + arr[2],
			title: arr[3],
			ext: arr[4].slice(arr[4].lastIndexOf('.'))
		}
	} else if (arr[0] === 'metadata') {
		return {
			type: arr[0]
		}
	} else {
		return {
			type: undefined
		}
	}
}
function putItemToDatabase(params) {
	return documentClient.put(params, function(err) {
		if (err) console.log("Can't add item to DynamoDB", err, err.stack);
	}).promise()
}
function putObjectToS3(params) {
	return s3.putObject(params, function(err) {
		if (err) console.log("Can't add object to S3", err, err.stack);
	}).promise()
}
function updateItemDynamoDB(params) {
	return documentClient.update(params, function(err) {
		if (err) console.log("Can't update item on DynamoDB", err, err.stack);
	}).promise()
}

module.exports = {
	getToday,
	deleteItemFromDatabase,
	deleteObjectFromS3,
	getDifferencesFromLastCommit,
	getFileContentFromNewCommit,
	getParentCommitId,
	parsePath,
	putObjectToS3,
	putItemToDatabase,
	updateItemDynamoDB
}
