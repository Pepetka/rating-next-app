import type { ReactNode } from "react";
import styles from "./Heading.module.css";

interface HeadingProps {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}

export const Heading = (props: HeadingProps) => {
  const { tag, children } = props;

  const TagName = tag;

  return (
    <TagName data-testid="Heading" className={styles.title}>
      {children}
    </TagName>
  );
};
