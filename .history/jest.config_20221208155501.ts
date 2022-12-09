import type {Config} from 'jest';
import {defaults} from 'jest-config';
// module.exports = {
//     collectCoverage: true,
//     collectCoverageFrom: ['scent-app-components/**/*.{js,jsx, tsx}'],
//     coverageDirectory: 'coverage',
//     testEnvironment: 'jsdom',
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
// }


const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  collectCoverageFrom: ['scent-app-components/**/*.{js,jsx}'],
};

export default config;