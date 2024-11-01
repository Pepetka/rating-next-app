/** @type {import('plop').NodePlopAPI} */
const config = (plop) => {
  plop.setGenerator("component", {
    description: "Generates a component",
    prompts: [
      {
        type: "input",
        name: "layer",
        message: "Layer name",
      },
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{withUI layer}}/{{name}}/ui/{{name}}/{{name}}.tsx",
        templateFile: "templates/component/ui/Component.hbs",
      },
      {
        type: "add",
        path: "src/{{withUI layer}}/{{name}}/ui/{{name}}/{{name}}.module.css",
        templateFile: "templates/component/ui/Component.module.hbs",
      },
      {
        type: "add",
        path: "src/{{withUI layer}}/{{name}}/ui/{{name}}/{{name}}.test.tsx",
        templateFile: "templates/component/ui/Component.test.hbs",
      },
      {
        type: "add",
        path: "src/{{withUI layer}}/{{name}}/ui/{{name}}/{{name}}.stories.tsx",
        templateFile: "templates/component/ui/Component.stories.hbs",
      },
      {
        type: "add",
        path: "src/{{withUI layer}}/{{name}}/index.ts",
        templateFile: "templates/component/index.hbs",
      },
    ],
  });
  plop.setGenerator("add", {
    description: "Add a component",
    prompts: [
      {
        type: "input",
        name: "path",
        message: "Component path",
      },
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{withUI path}}/ui/{{name}}/{{name}}.tsx",
        templateFile: "templates/component/ui/Component.hbs",
      },
      {
        type: "add",
        path: "src/{{withUI path}}/ui/{{name}}/{{name}}.module.css",
        templateFile: "templates/component/ui/Component.module.hbs",
      },
      {
        type: "add",
        path: "src/{{withUI path}}/ui/{{name}}/{{name}}.test.tsx",
        templateFile: "templates/component/ui/Component.test.hbs",
      },
      {
        type: "add",
        path: "src/{{withUI path}}/ui/{{name}}/{{name}}.stories.tsx",
        templateFile: "templates/component/ui/ComponentSliced.stories.hbs",
      },
    ],
  });
  plop.setHelper("withUI", (txt) => {
    const nodes = txt.split("/");

    const firstNode = nodes[0];
    if (firstNode === "shared") {
      nodes[0] = "shared/ui";
    }

    return nodes.join("/");
  });
  plop.setHelper("lowerCase", (txt) => {
    if (!txt) return txt;
    return txt.slice(0, 1).toLowerCase() + txt.slice(1);
  });
};

export default config;
