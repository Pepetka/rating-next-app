import type { PlopGeneratorConfig } from "plop";

const prompts: PlopGeneratorConfig['prompts'] = [
  {
    type: "input",
    name: "path",
    message: "Lib path",
    default: "shared",
  },
  {
    type: "input",
    name: "name",
    message: "Lib name",
  },
];

const actions: PlopGeneratorConfig['actions'] = (data = {}) => {
  const { path } = data;
  const pathArr: string[] = path.split("/");

  const libPathArr =
    pathArr.length && pathArr[pathArr.length - 1] === "lib" ? pathArr : [...pathArr, "lib"];

  const libPath = libPathArr.join("/");

  return [
    {
      type: "add",
      path: `src/${libPath}/{{name}}/{{name}}.ts`,
      templateFile: "templates/lib/lib.hbs",
    },
    {
      type: "add",
      path: `src/${libPath}/{{name}}/{{name}}.test.ts`,
      templateFile: "templates/lib/lib.test.hbs",
    },
    {
      type: "add",
      path: `src/${libPath}/{{name}}/index.ts`,
      templateFile: "templates/lib/index.hbs",
    },
  ];
}

export const libGenerator: Partial<PlopGeneratorConfig> = {
  description: "Generates a lib",
  prompts,
  actions,
};
