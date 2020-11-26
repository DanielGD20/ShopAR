// next.config.js
const withPlugins = require("next-compose-plugins");
const withVideos = require("next-videos");

module.exports = withPlugins([[withVideos]], {
  experimental: { scss: true },
  externals: ["aws-sdk", "commonjs2 firebase-admin"],
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
        child_process: "empty",
        net: "empty",
        tls: "empty",
      };
    }

    return config;
  },
});
