import { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  coverageThreshold: {
    global: {
      functions: 50,
      lines: 0,
      statements: 0,
      branches: 50
    }
  },
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    './src/domain/entities/*.ts',
    './src/application/use-cases/*.ts',
    './src/infra/http/controllers/*.controller.ts'
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  })
};

export default config;
