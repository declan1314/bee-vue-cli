exports.devServerPort = function (server) {
  switch (server) {
  case 'visa':
    return 8082
  case 'domair':
    return 8083
  case 'main':
    return 8084
  case 'admin':
    return 8085
  case 'intair':
    return 8086
  case 'zas':
    return 8087
  case 'vendor':
    return 8088
  }
}