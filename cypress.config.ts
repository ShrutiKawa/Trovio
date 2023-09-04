import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges: false,
  screenshotsFolder: "cypress/reports/screenshots", //Captures failed step screenshot
  videosFolder: "cypress/reports/videos", //Captures whole video
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Web UI Automation Testing",
    embeddedScreenshots: true,
    inlineAssets: true,
    html: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl:
        "https://www.globalsqa.com/angularJs-protractor/BankingProject/#",
    },
  },
});
