const path = require("path");

const commonModuleNameMappers = {
  "\\.module\\.(css|scss)$": "identity-obj-proxy",
  "\\.(css|scss)$": require.resolve("./__mocks__/empty_mock.js"),
};

// Not ideal solution, but this doesn't work either. Replace the following on module.exports to test this:
// moduleNameMapper: commonModuleNameMappers -> moduleNameMapper: mockGreeter,
const mockGreeter = {
  ...commonModuleNameMappers,
  ...{
    "\\.(greeter)$": require.resolve("./__mocks__/empty_mock.js"),
  },
};

module.exports = {
  rootDir: path.join(__dirname, "./"),
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "js"],
  moduleNameMapper: mockGreeter,
  resetMocks: true,
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!${greeter})"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  moduleNameMapper: commonModuleNameMappers,
  verbose: true,
};
