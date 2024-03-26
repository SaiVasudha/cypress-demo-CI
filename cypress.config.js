const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  projectId: "vpdjbe",
  env: { ...process.env },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight: 960,
  viewportWidth: 1536,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 90000,
});
