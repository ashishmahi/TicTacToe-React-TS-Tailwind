const WebPackBuildAnalze =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = () => {
  return {
    plugins: [
      new WebPackBuildAnalze({
        analyzerMode: "static",
      }),
    ],
  };
};
