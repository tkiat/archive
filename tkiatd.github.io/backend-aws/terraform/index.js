const fs = require('fs')
const helper = require("./helper.js")

const dbTableName = process.env.dynamoDB_table_name
const s3BucketName = process.env.s3_bucket_name

module.exports.handler = async (event) => {
	const thisCommitId = event.Records[0].codecommit.references[0].commit
	const repoName = event.Records[0].eventSourceARN.split(":")[5]

	const parentCommitId = await helper.getParentCommitId({
		commitId: thisCommitId,
		repositoryName: repoName,
	})
	const differences = await helper.getDifferencesFromLastCommit({
		afterCommitSpecifier: thisCommitId,
		beforeCommitSpecifier: parentCommitId,
		repositoryName: repoName,
	})
	// update git diff to database
	for (const diff of differences) {
		switch (diff.changeType) {
			case 'A': { // Add
				const filePath = diff.afterBlob.path
				if (filePath.endsWith('.adoc')) break // no need to upload

				const metadata = helper.parsePath(filePath)
				if (metadata.type === undefined) break

				const content = await helper.getFileContentFromNewCommit({
					filePath: filePath,
					repositoryName: repoName,
					commitSpecifier: thisCommitId
				})
				if (metadata.ext === '.html') { // put html to DynamoDB, else to S3
					await helper.putItemToDatabase({
						TableName: dbTableName,
						Item: {
							category: metadata.category,
							title: metadata.title,
							created: helper.getToday(),
							modified: helper.getToday(),
							content: content.fileContent
						}
					})
				} else {
					await helper.putObjectToS3({
						Bucket: s3BucketName,
						Key: filePath,
						Body: content.fileContent
					})
				}
				break
			}
			case 'D': { // Delete
				const filePath = diff.beforeBlob.path

				const metadata = helper.parsePath(filePath)
				if (metadata.type === undefined) break

				if (metadata.type === 'article' && metadata.ext === '.html') {
					await helper.deleteItemFromDatabase({
						TableName: dbTableName,
						Key: {
							category: metadata.category,
							title: metadata.title
						}
					})
				} else {
					await helper.deleteObjectFromS3({
						Bucket: s3BucketName,
						Key: filePath
					})
				}
				break
			}
			case 'M': { // Modified
				const filePath = diff.afterBlob.path
				if (filePath.endsWith('.adoc')) break // no need to upload

				const metadata = helper.parsePath(filePath)
				if (metadata.type === undefined) break

				const content = await helper.getFileContentFromNewCommit({
					filePath: filePath,
					repositoryName: repoName,
					commitSpecifier: thisCommitId
				})
				if (metadata.ext === '.html') { // put html to DynamoDB, else to S3
					await helper.updateItemDynamoDB({
						TableName: dbTableName,
						Key: {
							category: metadata.category,
							title: metadata.title
						},
						ExpressionAttributeNames: {'#before1' : 'modified', '#before2' : 'content'},
						ExpressionAttributeValues: {
							':after1' : helper.getToday(),
							':after2' : content.fileContent
						},
						UpdateExpression: 'set #before1 = :after1, #before2 = :after2',
					})
				} else {
					await helper.putObjectToS3({
						Bucket: s3BucketName,
						Key: filePath,
						Body: content.fileContent
					})
				}
				break
			}
			default: {
				break
			}
		}
	}
}
