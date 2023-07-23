import type { Config } from 'jest';

const config: Config = {
  // enable dom apis for tests
  testEnvironment: 'jsdom',

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['./setupTest.ts'],

  moduleDirectories: ['node_modules', 'src'],

  moduleNameMapper: {
    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',

    // Handle module aliases
    '^src/(.*)$': '<rootDir>/src/$1'
  },

  // coverage
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/style']
};

export default config;
