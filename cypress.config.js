const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 180000,
    requestTimeout: 30000,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    video: false,
    screenshotOnRunFailure: true,
    specPattern: "Teste/cenarios/**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
