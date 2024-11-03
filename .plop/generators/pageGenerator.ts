import type { PlopGeneratorConfig } from "plop";

const prompts: PlopGeneratorConfig["prompts"] = [
  {
    type: "input",
    name: "path",
    message: "Page path",
  },
];

const actions: PlopGeneratorConfig["actions"] = (data = {}) => {
  const { path } = data;
  const pathArr: string[] = path.split("/");

  const regex = /^\[.*\]$/;
  if (pathArr.some((node) => regex.test(node))) {
    return [
      {
        type: "add",
        path: `src/app/{{path}}/page.tsx`,
        templateFile: "templates/page/pageWithParams.hbs",
      },
    ];
  }

  return [
    {
      type: "add",
      path: "src/app/{{path}}/page.tsx",
      templateFile: "templates/page/page.hbs",
    },
  ];
};

export const pageGenerator: Partial<PlopGeneratorConfig> = {
  description: "Generates a page",
  prompts,
  actions,
};
