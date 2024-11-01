import { classnames } from "@/shared/lib/classnames";
import type { TagProps } from "../../types/types";
import styles from "./Tag.module.css";

export const Tag = (props: TagProps) => {
  const { isAnchor, children, theme = "primary", size = "medium", ...rest } = props;

  const TagName = isAnchor ? "a" : "span";

  return (
    <TagName
      data-testid="Tag"
      className={classnames(styles.tag, styles[theme], styles[size])}
      {...rest}
    >
      {children}
    </TagName>
  );
};
