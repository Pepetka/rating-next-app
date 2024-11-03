import type { PlopGeneratorConfig } from "plop";
import { componentGenerator } from "./generators/componentGenerator";
import { pageGenerator } from "./generators/pageGenerator";
import { libGenerator } from "./generators/libGenerator";

export const GENERATORS: Record<string, Partial<PlopGeneratorConfig>> = {
  component: componentGenerator,
  page: pageGenerator,
  lib: libGenerator,
};
