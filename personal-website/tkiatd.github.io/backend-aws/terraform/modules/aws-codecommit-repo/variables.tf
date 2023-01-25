variable "codeCommit" {
  type = map(string)
  default = {
    "repository"  = "blog-content"
    "description" = "Repository to store tkiatd.github.io content."
  }
}
