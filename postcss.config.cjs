module.exports = {
  plugins: [
    require("postcss-flexbugs-fixes"),
    require("@csstools/postcss-global-data")({
      files: ["./src/styles/custom-media.css"],
    }),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-media-queries": true,
        "custom-properties": false,
      },
    }),
  ],
};
