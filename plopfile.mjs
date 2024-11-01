/** @type {import('plop').NodePlopAPI} */
const config = (plop) => {
  plop.setGenerator("component", {
    description: "Generates a component",
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
    actions: (data) => {
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
    },
  });
  plop.setHelper("transformPath", (txt) => {
    let nodes = txt.split("/");

    if (nodes[0].toLowerCase() === "shared" && nodes[1]?.toLowerCase() !== "ui") {
      nodes = ["shared", "ui", ...nodes.slice(1)];
    }

    return nodes
      .reduce((acc, item, i) => {
        if (i === 0 || item.toLowerCase() === "ui") {
          acc.push(item.toLowerCase());
        } else {
          acc.push(item.slice(0, 1).toUpperCase() + item.slice(1));
        }
        return acc;
      }, [])
      .join("/");
  });
  plop.setHelper("capitalizeFirst", (txt) => {
    return txt.slice(0, 1).toUpperCase() + txt.slice(1);
  });
  plop.setHelper("lowerFirst", (txt) => {
    return txt.slice(0, 1).toLowerCase() + txt.slice(1);
  });
  plop.setPartial("Name", "{{capitalizeFirst name}}");
  plop.setPartial("Path", "{{transformPath path}}");
  plop.setPartial("lowerName", "{{lowerFirst name}}");
};

export default config;
