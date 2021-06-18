import "reflect-metadata";
import { pathsToModuleNameMapper } from "ts-jest/utils";

import { compilerOptions } from "./tsconfig.json";

export default {
  bail: true,

  clearMocks: true,

  coverageProvider: "v8",

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src/",
  }),

  setupFilesAfterEnv: ["<rootDir>/jest.config.ts"],

  preset: "ts-jest",

  testEnvironment: "node",

  testMatch: ["**/*.spec.ts"],
};
