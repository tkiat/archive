variable "profile" {
  type = map(string)
  default = {
    "user"             = "tkiatd"
    "region"           = "ap-southeast-1"
    "credentials_file" = "~/.aws/credentials"
  }
}
