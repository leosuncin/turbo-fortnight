target "docker-metadata-action" {}

target "api" {
  inherits = ["docker-metadata-action"]
  context = "."
  args = {
    "PORT" = 3000
    PNPM_VERSION = "12"
  }
}

group "default" {
  targets = ["api"]
}
