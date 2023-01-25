variable "aws_dynamodb_table_arn" {}
variable "aws_s3_bucket_arn" {}
# ----------------------------------------
# resources
# create identity pool and attach role with policy on it
resource "aws_cognito_identity_pool" "local" {
  identity_pool_name               = var.cognito.identity_pool_name
  allow_unauthenticated_identities = true
}
resource "aws_iam_role" "local" {
  name = var.cognito.identity_pool_role_name
  # aud: audience contains client_id
  # amr: Authentication Methods References e.g. unauthenticated or graph.facebook.com
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Principal": {
        "Federated": "cognito-identity.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": "",
      "Condition": {
        "StringEquals": {
          "cognito-identity.amazonaws.com:aud": "${aws_cognito_identity_pool.local.id}"
        },
        "ForAnyValue:StringLike": {
          "cognito-identity.amazonaws.com:amr": "unauthenticated"
        }
      }
    }
  ]
}
EOF
}
resource "aws_iam_role_policy" "local" {
  name = var.cognito.identity_pool_role_policy_name
  role = aws_iam_role.local.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "mobileanalytics:PutEvents",
        "cognito-sync:*"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Action": [
        "dynamodb:Query",
        "dynamodb:Scan"
      ],
      "Effect": "Allow",
      "Resource": "${var.aws_dynamodb_table_arn}"
    },
    {
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "${var.aws_s3_bucket_arn}/*"
    }
  ]
}
EOF
}
resource "aws_cognito_identity_pool_roles_attachment" "local" {
  identity_pool_id = aws_cognito_identity_pool.local.id
  roles = {
    "unauthenticated" = aws_iam_role.local.arn
  }
}
# ----------------------------------------
# output
output "identity_pool_id" {
  value = aws_cognito_identity_pool.local.id
}
