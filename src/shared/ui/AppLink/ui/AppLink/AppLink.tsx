import Link from "next/link";
import type { ComponentProps } from "react";
import { classnames } from "@/shared/lib/classnames";
import styles from "./AppLink.module.css";

export interface AppLinkProps extends ComponentProps<typeof Link> {}

export const AppLink = (props: AppLinkProps) => {
  const { className, ...rest } = props;

  return <Link data-testid="AppLink" className={classnames(styles.appLink, className)} {...rest} />;
};
