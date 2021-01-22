# ----------------------------------------
# resources
resource "aws_dynamodb_table" "local" {
  name           = "blog-articles"
  billing_mode   = "PROVISIONED"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "category"
  range_key      = "title"
  attribute {
    name = "category"
    type = "S"
  }
  attribute {
    name = "title"
    type = "S"
  }
}

output "table_name" {
  value = aws_dynamodb_table.local.name
}

output "table_arn" {
  value = aws_dynamodb_table.local.arn
}
# variable "dynamoDB" {
#   type = object({
#     billing_mode   = string
#     hash_key       = string
#     range_key      = string
#     read_capacity  = number
#     table_name     = string
#     write_capacity = number
#     attributes     = list(map(string))
#   })
#   default = {
#     "billing_mode"   = "PROVISIONED"
#     "hash_key"       = "category"
#     "range_key"      = "title"
#     "read_capacity"  = 5
#     "table_name"     = "blog-articles"
#     "write_capacity" = 5
#     "attributes" = [
#       {
#         name = "category",
#         type = "S"
#       },
#       {
#         name = "title",
#         type = "S"
#       }
#     ]
#   }
# }
#   dynamic "attribute" {
#     for_each = var.dynamoDB["attributes"]
#     content {
#       name = attribute.value.name
#       type = attribute.value.type
#     }
#   }
