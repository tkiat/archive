variable "aws_codecommit_repo_arn" {}
variable "aws_dynamodb_table_arn" {}
variable "aws_dynamodb_table_name" {}
variable "aws_s3_bucket_arn" {}
variable "aws_s3_bucket_name" {}
# ----------------------------------------
# resources
# lamda function
resource "aws_lambda_function" "local" {
  environment {
    variables = {
      dynamoDB_table_name = var.aws_dynamodb_table_name
      s3_bucket_name      = var.aws_s3_bucket_name
    }
  }
  filename      = "lambda_function_payload.zip"
  function_name = var.lambda.function_name
  role          = aws_iam_role.local.arn
  handler       = var.lambda.handler
  runtime       = var.lambda.runtime
  # trigger lambda function update if zip file content changes
  source_code_hash = filebase64sha256(data.archive_file.lambda_zip.output_path)
}
# lamda function: source files
data "archive_file" "lambda_zip" {
  type        = "zip"
  output_path = "lambda_function_payload.zip"
  dynamic "source" {
    for_each = var.lambda["source_files"]
    content {
      content  = file(source.value)
      filename = source.value
    }
  }
}
# lambda function: attach policy to the role, then assign this role to lambda function
resource "aws_iam_role" "local" {
  name               = "github_pages_lambda"
  assume_role_policy = <<EOF
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Action": "sts:AssumeRole",
			"Principal": {
				"Service": "lambda.amazonaws.com"
			},
			"Effect": "Allow",
			"Sid": ""
		}
	]
}
EOF
}
resource "aws_iam_policy" "local" {
  name   = "github_pages_lambda"
  policy = <<-EOF
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": [
          "dynamodb:DeleteItem",
          "dynamodb:PutItem",
          "dynamodb:UpdateItem"
        ],
        "Effect": "Allow",
        "Resource": "${var.aws_dynamodb_table_arn}"
      },
      {
        "Action": [
          "codecommit:GetCommit",
          "codecommit:GetDifferences",
          "codecommit:GetFile"
        ],
        "Effect": "Allow",
        "Resource": "${var.aws_codecommit_repo_arn}"
      },
      {
        "Action": [
          "s3:PutObject",
          "s3:DeleteObject"
        ],
        "Effect": "Allow",
        "Resource": "${var.aws_s3_bucket_arn}/*"
      }
    ]
  }
  EOF
}
resource "aws_iam_role_policy_attachment" "local" {
  role       = aws_iam_role.local.name
  policy_arn = aws_iam_policy.local.arn
}
# ----------------------------------------
# output
output "function_arn" {
  value = aws_lambda_function.local.arn
}
output "function_name" {
  value = aws_lambda_function.local.function_name
}
