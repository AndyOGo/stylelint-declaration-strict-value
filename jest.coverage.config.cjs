const baseConfig = require('./jest.config.json');

/** @type {import('jest').Config} */
const config = {
  ...baseConfig,
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: '<rootDir>/coverage',
};

module.exports = config;
