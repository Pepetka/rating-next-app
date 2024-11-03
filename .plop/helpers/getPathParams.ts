export const getPathParams = (txt: string) => {
  const arr: string[] = txt.split("/");
  const regex = /^\[.*\]$/;

  return arr
    .reduce((acc, item) => {
      if (regex.test(item)) {
        const param = item.slice(1, -1);
        return acc.length ? `${acc} ${param}: string;` : `${param}: string;`;
      }
      return acc;
    }, "")
    .slice(0, -1);
};
