import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    testIsolation: false,
    specPattern: './__tests__/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false
  },
});
