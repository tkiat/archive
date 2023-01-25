# ----------------------------------------
# provider
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}
provider "aws" {
  profile                 = var.profile.user
  region                  = var.profile.region
  shared_credentials_file = var.profile["credentials_file"]
}
# ----------------------------------------
# modules
# (CodeCommit) --activate on commit--> (Lambda) --> store changes to (DynamoDB) and (S3)
# (Cognito) allow query from (DynamoDB) and (S3) through SDK
module "aws-codecommit-repo" {
  source               = "./modules/aws-codecommit-repo"
  lambda_function_arn  = module.aws-lambda-function.function_arn
  lambda_function_name = module.aws-lambda-function.function_name
}
module "aws-cognito-identity-pool" {
  source                 = "./modules/aws-cognito-identity-pool"
  aws_dynamodb_table_arn = module.aws-dynamodb-table.table_arn
  aws_s3_bucket_arn      = module.aws-s3-bucket.bucket_arn
}
module "aws-dynamodb-table" {
  source = "./modules/aws-dynamodb-table"
}
module "aws-lambda-function" {
  source                  = "./modules/aws-lambda-function"
  aws_codecommit_repo_arn = module.aws-codecommit-repo.repo_arn
  aws_dynamodb_table_arn  = module.aws-dynamodb-table.table_arn
  aws_dynamodb_table_name = module.aws-dynamodb-table.table_name
  aws_s3_bucket_arn       = module.aws-s3-bucket.bucket_arn
  aws_s3_bucket_name      = module.aws-s3-bucket.bucket_name
}
module "aws-s3-bucket" {
  source = "./modules/aws-s3-bucket"
}
# ----------------------------------------
# output
output "cognito_identity_pool_id" {
  value = module.aws-cognito-identity-pool.identity_pool_id
}
