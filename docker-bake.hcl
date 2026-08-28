variable "DOCKER_META_VERSION" {
  default = "latest"
  validation {
    condition = DOCKER_META_VERSION == regex("(?:^\\d+\\.\\d+\\.\\d+$)|latest", DOCKER_META_VERSION)
    error_message = "DOCKER_META_VERSION must follow SemVer format"
  }
}

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
