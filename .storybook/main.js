module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-storysource"],
  webpackFinal: (config) => {
    config.stats = "errors-only";

    config.output.filename = "[name].iframe.bundle.js";

    if (process.env.NODE_ENV === "production") {
      config.devtool = "source-map";
    }

    return config;
  },
  typescript: {
    check: true,
  },
};
