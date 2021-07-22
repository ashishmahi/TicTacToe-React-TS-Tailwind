const WebpackCompressionPlugin = require("compression-webpack-plugin");
module.exports = () => {
  return {
    plugins: [new WebpackCompressionPlugin()],
  };
};
