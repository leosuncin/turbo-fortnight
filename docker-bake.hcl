target "docker-metadata-action" {}

target "api" {
  inherits = ["docker-metadata-action"]
  context = "."
  args = {
    "PORT" = 3000
  }
}

group "default" {
  targets = ["api"]
}
