import { defineConfig, devices } from '@playwright/test';
import env from 'dotenv';


/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* join multiples report in only one.*/ 
  reporter: process.env.CI ? 'blob' : 'html',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['json', { outputFile: 'results.json' }]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    httpCredentials: {
      username: process.env.TEST_USER || 'usuarioPorDefecto',
      password: process.env.TEST_PASSWORD || 'clavePorDefecto',
    },

    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://www.leagueoflegends.com/es-es/', 
    trace: 'on-first-retry',      // on-first-retry    
    video: 'on',   
    screenshot: 'on',
    timezoneId: 'Europe/Madrid',
    locale: 'es-ES',
  
  },
    outputDir: 'test-results/',

  

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

  

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
/*
    {
      name:'Mobile Firefox',
      use: { 
        ...devices['Pixel 5'],
        browserName: 'firefox'
      },
    }
      */
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

});
