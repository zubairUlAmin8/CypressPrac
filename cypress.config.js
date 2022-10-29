const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3sadt4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
