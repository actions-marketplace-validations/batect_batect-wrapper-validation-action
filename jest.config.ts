import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
  errorOnDeprecated: true,
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  verbose: true,
};

export default config;