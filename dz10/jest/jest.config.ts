import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,

    preset: 'ts-jest',

    testEnvironment: 'node',

    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },

    globals: {
        'ts-jest': {
            isolatedModules: true
        }
    },

    testMatch: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],

    transformIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],

    coverageProvider: 'v8',
    collectCoverage: true,
    coverageDirectory: 'coverage',

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },

    verbose: true
};

export default config;
