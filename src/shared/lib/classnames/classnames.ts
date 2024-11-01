type BaseClassType = string | null | undefined;
type ArrayClassType = Array<string | null | undefined>;
type ObjectClassType = Record<string, boolean | null | undefined>;

const compare = (str1: string, str2: string) => {
  if (!str1 || !str2) return str1 || str2;

  return `${str1} ${str2}`;
};

export const classnames = (...args: (BaseClassType | ArrayClassType | ObjectClassType)[]) => {
  return args.reduce<string>((acc, arg) => {
    if (!arg) {
      return acc;
    }

    if (typeof arg === "string") {
      return compare(acc, arg);
    }

    if (Array.isArray(arg)) {
      return arg.reduce<string>((acc, item) => {
        if (item) {
          return compare(acc, item);
        }

        return acc;
      }, acc);
    }

    return Object.keys(arg).reduce<string>((acc, key) => {
      if (arg[key]) {
        return compare(acc, key);
      }

      return acc;
    }, acc);
  }, "");
};
