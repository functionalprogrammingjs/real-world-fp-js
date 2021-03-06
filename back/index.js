const server = require("./app")
const { log } = require("./utils")

const start = async port => {
  await server.listenAsync(port)
  return port
}

start(3001).then(log("App running on port:"))
