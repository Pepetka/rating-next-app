import type { PlopGeneratorConfig } from "plop";

const prompts: PlopGeneratorConfig["prompts"] = [
  {
    type: "confirm",
    name: "isSubcomponent",
    default: false,
    message: "Create a subcomponent?",
  },
  {
    type: "list",
    name: "path",
    when: (answers) => !answers.isSubcomponent,
    choices: () => ["shared", "entities", "features", "widgets", "pages", "app"],
    message: "Layer of the component to be created",
  },
  {
    type: "input",
    name: "path",
    when: (answers) => answers.isSubcomponent,
    validate(input) {
      if (!input) {
        return "Enter the path where the component will be created";
      }
      return true;
    },
    message: "Path of the component to be created",
  },
  {
    type: "input",
    name: "name",
    validate(input) {
      if (!input) {
        return "Enter a name for the component";
      }
      return true;
    },
    message: "Name of the component to be created",
  },
];

const actions: PlopGeneratorConfig["actions"] = (data = {}) => {
  const { path } = data;

  const capitalizedName = "{{> Name}}";
  const transformedPath = "{{> Path}}";

  const actions = [];

  const pathArr = path.split("/");

  if (pathArr.length === 1 || path === "shared/ui") {
    actions.push(
      {
        type: "add",
        path: `src/${transformedPath}/${capitalizedName}/ui/${capitalizedName}/${capitalizedName}.tsx`,
        templateFile: "templates/component/ui/Component.hbs",
      },
      {
        type: "add",
        path: `src/${transformedPath}/${capitalizedName}/ui/${capitalizedName}/${capitalizedName}.module.css`,
        templateFile: "templates/component/ui/Component.module.hbs",
      },
      {
        type: "add",
        path: `src/${transformedPath}/${capitalizedName}/ui/${capitalizedName}/${capitalizedName}.test.tsx`,
        templateFile: "templates/component/ui/Component.test.hbs",
      },
      {
        type: "add",
        path: `src/${transformedPath}/${capitalizedName}/ui/${capitalizedName}/${capitalizedName}.stories.tsx`,
        templateFile: "templates/component/ui/Component.stories.hbs",
      },
      {
        type: "add",
        path: `src/${transformedPath}/${capitalizedName}/index.ts`,
        templateFile: "templates/component/index.hbs",
      },
    );
  } else {
    actions.push(
      {
        type: "add",
        path: `src/${transformedPath}/ui/${capitalizedName}/${capitalizedName}.tsx`,
        templateFile: "templates/component/ui/Component.hbs",
      },
      {
        type: "add",
        path: `src/${transformedPath}/ui/${capitalizedName}/${capitalizedName}.module.css`,
        templateFile: "templates/component/ui/Component.module.hbs",
      },
      {
        type: "add",
        path: `src/${transformedPath}/ui/${capitalizedName}/${capitalizedName}.test.tsx`,
        templateFile: "templates/component/ui/Component.test.hbs",
      },
      {
        type: "add",
        path: `src/${transformedPath}/ui/${capitalizedName}/${capitalizedName}.stories.tsx`,
        templateFile: "templates/component/ui/Component.stories.hbs",
      },
    );
  }

  return actions;
};

export const componentGenerator: Partial<PlopGeneratorConfig> = {
  description: "Generates a component",
  prompts,
  actions,
};
