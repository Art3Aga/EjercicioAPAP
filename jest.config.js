module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  preset: 'jest-preset-angular',
  testTimeout: 30000,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
