const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-storysource"],
  webpackFinal: (config) => {
    config.stats = "errors-only";

    config.entry = {
      main: config.entry,
      // fixedPolyfill: require.resolve("@webcomponents/webcomponentsjs"),
    };

    config.output.filename = "[name].iframe.bundle.js";

    if (process.env.NODE_ENV === "production") {
      config.devtool = "source-map";
    }

    config.plugins = [
      ...config.plugins,
      new CopyPlugin({
        patterns: [{ from: require.resolve("@webcomponents/webcomponentsjs") }],
      }),
    ];

    console.log(require("util").inspect(config, null, 2));

    return config;
  },
  typescript: {
    check: true,
  },
};
