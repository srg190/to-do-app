/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  collectCoverage: true,
  preset: 'ts-jest',
  collectCoverageFrom: ["src/**/*.tsx", "src/**/*.ts"],
  modulePaths: ["<rootDir>/"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // "^.+\\.svg$": "<rootDir>/svgTransform.js",
    // "\\.(css|less|scss|sass)$": "<rootDir>/src/test/jest/_mocks_/styleMock.ts",
  },
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  transformIgnorePatterns: ["node_modules/(?!(axios|react-toastify))"],
  watchPathIgnorePatterns: ["<rootDir>/node_modules"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@components/(.*)": "<rootDir>/src/components/$1",
    "^@styles/(.*)": "<rootDir>/src/styles/$1",
    "^@pages/(.*)": "<rootDir>/src/pages/$1",
    "^@redux/(.*)": "<rootDir>/src/redux/$1",
    "^@utility/(.*)": "<rootDir>/src/utility/$1",
    "^@constant/(.*)": "<rootDir>/src/constant/$1",
    "^@src/(.*)": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
