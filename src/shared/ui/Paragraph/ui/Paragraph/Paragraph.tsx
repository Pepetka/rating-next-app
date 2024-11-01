import type { HTMLAttributes, ReactNode } from "react";
import { classnames } from "@/shared/lib/classnames";
import styles from "./Paragraph.module.css";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "small" | "medium" | "large";
  children: ReactNode;
}

export const Paragraph = (props: ParagraphProps) => {
  const { size = "medium", children, className, ...rest } = props;

  return (
    <p
      data-testid="Paragraph"
      className={classnames(styles.paragraph, className, styles[size])}
      {...rest}
    >
      {children}
    </p>
  );
};
