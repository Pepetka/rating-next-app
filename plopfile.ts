import type { NodePlopAPI } from "plop";
import { GENERATORS } from "./.plop/generators";
import { HELPERS } from "./.plop/helpers";
import { PARTIALS } from "./.plop/partials";

const config = (plop: NodePlopAPI) => {
  Object.entries(GENERATORS).forEach(([name, generator]) => {
    plop.setGenerator(name, generator);
  });

  Object.entries(HELPERS).forEach(([name, helper]) => {
    plop.setHelper(name, helper);
  });

  Object.entries(PARTIALS).forEach(([name, partial]) => {
    plop.setPartial(name, partial);
  });
};

export default config;
