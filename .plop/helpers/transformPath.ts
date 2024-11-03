export const transformPath = (txt: string) => {
  let nodes: string[] = txt.split("/");

  if (nodes[0].toLowerCase() === "shared" && nodes[1]?.toLowerCase() !== "ui") {
    nodes = ["shared", "ui", ...nodes.slice(1)];
  }

  return nodes
    .reduce<string[]>((acc, item, i) => {
      if (i === 0 || item.toLowerCase() === "ui") {
        acc.push(item.toLowerCase());
      } else {
        acc.push(item.slice(0, 1).toUpperCase() + item.slice(1));
      }
      return acc;
    }, [])
    .join("/");
};
