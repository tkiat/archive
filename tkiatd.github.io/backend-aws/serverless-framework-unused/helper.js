const aws = require('aws-sdk');

const codecommit = new aws.CodeCommit({ apiVersion: '2015-04-13' });
const documentClient = new aws.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

function today() {
	let y = new Date().getFullYear();
	let m = new Date().getMonth() + 1;
	let d = new Date().getDate();

	y = '' + y;
	m = (m < 10 ? '0' : '') + m;
	d = (d < 10 ? '0' : '') + d;

	return [y, m, d].join('-');
}

function deleteItemFromDatabase(params) {
	return documentClient.delete(params, function(err, data) {
		if (err) console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
	}).promise();
}
function getDifferencesFromLastCommit(params) {
	return new Promise((resolve, reject) => {
		codecommit.getDifferences(params, function(err, data) {
			if (err) {
				console.log(err, err.stack);
				reject(err);
			} else {
				resolve(data.differences);
			}
		});
	});
}
function getFileContentFromNewCommit(params) {
	return new Promise((resolve, reject) => {
		codecommit.getFile(params, function(err, data) {
			if (err) reject(null);
			else resolve(data);
		});
	});
}
function getParentCommitId(params) {
	return new Promise((resolve, reject) => {
		codecommit.getCommit(params, function(err, data) {
			if (err) {
				console.log(err, err.stack);
				reject(err);
			} else {
				resolve(data.commit.parents[0]);
			}
		});
	});
}
function putItemToDatabase(params) {
	return documentClient.put(params, function(err, data) {
		if (err) console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
	}).promise();
}
function updateItemFromDatabase(params) {
	return documentClient.update(params, function(err, data) {
		if (err) console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
	}).promise();
}

module.exports = {
	today,
	deleteItemFromDatabase,
	getDifferencesFromLastCommit,
	getFileContentFromNewCommit,
	getParentCommitId,
	putItemToDatabase,
	updateItemFromDatabase
};
