module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Runs special logic, adding special
  // extended assertions to Jest
  //   setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!src/index.tsx",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
