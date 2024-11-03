import { transformPath } from "./helpers/transformPath";
import { capitalizeFirst } from "./helpers/capitalizeFirst";
import { lowerFirst } from "./helpers/lowerFirst";
import { getPathParams } from "./helpers/getPathParams";

export const HELPERS: Record<string, (txt: string) => string> = {
  transformPath,
  capitalizeFirst,
  lowerFirst,
  getPathParams,
};
