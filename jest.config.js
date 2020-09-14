module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.{js,vue}"],
  coverageDirectory: "coverage/jest-coverage",
  coveragePathIgnorePatterns: ["<rootDir>/src/tests/"],
  coverageReporters: ["json"],
  moduleFileExtensions: ["js", "vue"],
  testPathIgnorePatterns: ["<rootDir>/src/tests/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
};
