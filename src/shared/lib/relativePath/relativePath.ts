export const relativePath = (base: string | string[] = "/", searchParams?: URLSearchParams) => {
  let path = "";

  if (Array.isArray(base)) {
    path = base.reduce((acc, node) => {
      if (node.startsWith("/")) {
        if (acc.endsWith("/")) {
          return `${acc.slice(0, -1)}${node}`;
        } else {
          return `${acc}${node}`;
        }
      }
      if (acc.endsWith("/")) {
        return `${acc}${node}`;
      }
      return `${acc}/${node}`;
    }, "");
  } else {
    path = base.startsWith("/") ? base : `/${base}`;
  }

  if (searchParams) {
    return `${path}?${searchParams.toString()}`;
  }

  return path;
};
