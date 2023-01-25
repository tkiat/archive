variable "lambda_function_name" {}
variable "lambda_function_arn" {}
# ----------------------------------------
# resources
resource "aws_codecommit_repository" "local" {
  repository_name = var.codeCommit.repository
  description     = var.codeCommit.description
  provisioner "local-exec" {
    command = "echo 'cloning ${var.codeCommit.repository} into ~/Git/${var.codeCommit.repository} ... ' && git clone ${aws_codecommit_repository.local.clone_url_ssh} ~/Git/${var.codeCommit.repository}"
  }
}
resource "aws_codecommit_trigger" "local" {
  repository_name = aws_codecommit_repository.local.repository_name
  trigger {
    name            = "github_pages_lambda"
    events          = ["updateReference"]
    branches        = ["master"]
    destination_arn = var.lambda_function_arn
  }
}
resource "aws_lambda_permission" "local" {
  statement_id  = "AllowExecutionFromCodeCommit"
  action        = "lambda:InvokeFunction"
  function_name = var.lambda_function_name
  principal     = "codecommit.amazonaws.com"
  source_arn    = aws_codecommit_repository.local.arn
}
# ----------------------------------------
# output
output "repo_arn" {
  value = aws_codecommit_repository.local.arn
}
