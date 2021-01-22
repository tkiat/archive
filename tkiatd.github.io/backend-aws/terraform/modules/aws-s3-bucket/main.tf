resource "aws_s3_bucket" "local" {
  acl    = "private"
  bucket = "tkiatd-blog-content"
  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
    max_age_seconds = 3000
  }
}
resource "aws_s3_bucket_policy" "local" {
  bucket = aws_s3_bucket.local.id
  policy = <<-EOF
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "PublicRead",
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "${aws_s3_bucket.local.arn}/*"
      }
    ]
  }
  EOF
}

output "bucket_arn" {
  value = aws_s3_bucket.local.arn
}

output "bucket_name" {
  value = aws_s3_bucket.local.bucket
}
