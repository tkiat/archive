const helper = require("./helper.js");

module.exports.handler = async (event, context) => {
	var thisCommitId = event.Records[0].codecommit.references[0].commit;
	var repoName = event.Records[0].eventSourceARN.split(":")[5];

	let parentCommitId = await helper.getParentCommitId({
		commitId: thisCommitId,
		repositoryName: repoName,
	});
	let differences = await helper.getDifferencesFromLastCommit({
		afterCommitSpecifier: thisCommitId,
		beforeCommitSpecifier: parentCommitId,
		repositoryName: repoName,
	});
	// update git diff to database
	for (const diff of differences) {
		if (diff.changeType === 'A') {
			const filePath = diff.afterBlob.path;
			const arr = filePath.split('/');
			if (!filePath.endsWith('.html') && arr.length !== 3) continue;
			let content = await helper.getFileContentFromNewCommit({
				filePath: filePath,
				repositoryName: repoName,
				commitSpecifier: thisCommitId
			});
			await helper.putItemToDatabase({
				TableName: "blog",
					Item: {
					category: arr.slice(0, 2).join('/'),
					filename: arr.slice(2).join('/'),
					created: helper.today(),
					modified: helper.today(),
					content: content.fileContent
				}
			});
		} if (diff.changeType === 'D') {
			const filePath = diff.beforeBlob.path;
			const arr = filePath.split('/');
			if (!filePath.endsWith('.html') && arr.length !== 3) continue;
			await helper.deleteItemFromDatabase({
				TableName: 'blog',
				Key: {
					category: arr.slice(0, 2).join('/'),
					filename: arr.slice(2).join('/')
				}
			});
		} if (diff.changeType === 'M') {
			const filePath = diff.afterBlob.path;
			const arr = filePath.split('/');
			if (!filePath.endsWith('.html') && arr.length !== 3) continue;
			let content = await helper.getFileContentFromNewCommit({
				filePath: filePath,
				repositoryName: repoName,
				commitSpecifier: thisCommitId
			});
			await helper.updateItemFromDatabase({
				TableName: "blog",
				Key: {
				  category: arr.slice(0, 2).join('/'),
				  filename: arr.slice(2).join('/')
				},
				ExpressionAttributeNames: {'#before1' : 'modified', '#before2' : 'content'},
				ExpressionAttributeValues: {
					':after1' : helper.today(),
					':after2' : content.fileContent
				},
				UpdateExpression: 'set #before1 = :after1, #before2 = :after2',
			});
		}
	}
};
