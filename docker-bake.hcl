target "docker-metadata-action" {}

target "api" {
  inherits = ["docker-metadata-action"]
  context = "."
  args = {
    PORT = 3000
    PNPM_VERSION = "latest-11"
  }
}

group "default" {
  targets = ["api"]
}
