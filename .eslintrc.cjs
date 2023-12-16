module.exports = {
  extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended"],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      rules: {
        "no-return-await": off,
      },
    },
  ],
};
