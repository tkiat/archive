variable "cognito" {
  type = map(string)
  default = {
    "identity_pool_name"             = "github_pages"
    "identity_pool_role_name"        = "github_pages_cognito"
    "identity_pool_role_policy_name" = "github_pages_cognito_unauthenticated"
  }
}
