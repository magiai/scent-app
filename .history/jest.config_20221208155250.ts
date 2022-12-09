module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['scent-app-components/**/*.{js,jsx, tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}

import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
};

export default config;