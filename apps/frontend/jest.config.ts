import type { Config } from 'jest'

const jestConfig: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cache: true,
  verbose: true,
  resetMocks: true,
  resetModules: true,
  clearMocks: true,
  restoreMocks: true,
  collectCoverage: true,
  fakeTimers: {
    enableGlobally: true
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/json-server/'
  ],
  moduleNameMapper: {
    '^__setup__(.*)$': '<rootDir>/src/__setup__$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@helpers(.*)$': '<rootDir>/src/shared/helpers$1',
    '^@constants(.*)$': '<rootDir>/src/shared/constants$1',
    '^@interfaces(.*)$': '<rootDir>/src/shared/interfaces$1',
    '^@enums(.*)$': '<rootDir>/src/shared/enums$1'
  },
  moduleFileExtensions: ['js', 'ts']
}

export default jestConfig
