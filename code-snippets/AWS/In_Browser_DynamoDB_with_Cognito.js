// include this in header <script src="https://sdk.amazonaws.com/js/aws-sdk-2.740.0.min.js"></script>

// Amazon Cognito credentials
AWS.config.region = 'ap-southeast-1' // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	IdentityPoolId: 'ap-southeast-1:bab4029f-74f4-4769-a121-c6456cd3652b',
})
// DynamoDB
const documentClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'})

// // DynamoDB scan
// var params = {
// 	TableName: 'blog-articles',
// 	ProjectionExpression: 'category, filename, created, modified'
// }
// documentClient.scan(params, function(err, data) {
// 	if (err) console.log(err)
// 	else console.log(data)
// })

// // DynamoDB query
// params = {
// 	TableName: 'blog-articles',
// 	KeyConditionExpression: 'category = :c and title = :t',
// 	ExpressionAttributeValues: {
// 		':c': 'Gratitude_and_Freedom/Zero_Waste',
// 		':t': 'List_of_Zero_Waste_Items'
// 	}
// }
// documentClient.query(params, function(err, data) {
// 	if (err) console.log(err)
// 	else {
// 		console.log(data)
// 		// console.log(data.Items[0].content)
// 		// document.getElementById('article').innerHTML = data.Items[0].content.toString()
// 	}
// })

// S3
var s3 = new AWS.S3()
// loadImage()
async function loadImage() {
	// console.log(document.body.getElementsByClassName('article'))
	var imgList = document.body.getElementsByClassName('article')
	for (var i = 0; i < imgList.length; i++) {
		console.log(imgList[i])
		// S3 getObject
		var params2 = {
			Bucket: "tkiatd-blog-content",
			Key: "article/Gratitude_and_Freedom/Zero_Waste/List_of_Zero_Waste_Items/test-150x100.png"
		};
		var test = await new Promise((resolve, reject) => {
			s3.getObject(params2, function(err, data) {
				if (err) {
					console.log("Can't get file content from new commit", err, err.stack);
					reject(null)
				} else {
					resolve(encode(data.Body))
				}
			})
		})
		imgList[i].src = "data:image/png;base64," + test
	}
}

function encode(data) {
	var str = data.reduce(function(a,b){ return a+String.fromCharCode(b) },'')
	return btoa(str).replace(/.{76}(?=.)/g,'$&\n')
}
