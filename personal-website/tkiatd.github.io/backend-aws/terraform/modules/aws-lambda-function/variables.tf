variable "lambda" {
  type = object({
    function_name = string
    handler       = string
    runtime       = string
    source_files  = list(string)
  })
  default = {
    "function_name" = "github_pages"
    "handler"       = "index.handler"
    "runtime"       = "nodejs12.x"
    "source_files"  = ["index.js", "helper.js"]
  }
}
