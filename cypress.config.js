const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        downloadFile, 
        log(message) {
          console.log(message);
          return null;
        }
      });
      return config;
      // implement node event listeners here
    },
    chromeWebSecurity: false,
  },
});
