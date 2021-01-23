const mainConfig = require("./webpack.config.main")
const rendererConfig = require("./webpack.config.renderer")

const config = [mainConfig, rendererConfig]
module.exports = config
