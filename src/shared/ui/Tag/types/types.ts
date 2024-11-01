import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

interface TagPropsBase {
  isAnchor?: boolean;
  children: ReactNode;
  theme?: "primary" | "red" | "green" | "gray" | "outline";
  size?: "small" | "medium";
}

interface TagPropsAnchor extends TagPropsBase, AnchorHTMLAttributes<HTMLAnchorElement> {
  isAnchor: true;
  children: ReactNode;
}

interface TagPropsSpan extends TagPropsBase, HTMLAttributes<HTMLSpanElement> {
  isAnchor?: false;
  children: ReactNode;
}

export type TagProps = TagPropsSpan | TagPropsAnchor;
