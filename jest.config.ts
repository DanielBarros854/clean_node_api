export default {
  preset: '@swc-node/jest',

  roots: ['<rootDir>/src'],

  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  coverageDirectory: 'coverage',

  testEnvironment: 'node',

  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest']
  }
}
