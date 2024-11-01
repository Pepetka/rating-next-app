import type { HTMLAttributes } from "react";
import closeIcon from "@/shared/assets/icons/close.svg";
import navIcon from "@/shared/assets/icons/nav.svg";
import { classnames } from "@/shared/lib/classnames";
import { Button } from "@/shared/ui/Button";
import { Logo } from "@/shared/ui/Logo";
import styles from "./Header.module.css";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  opened?: boolean;
}

export const Header = (props: HeaderProps) => {
  const { className, opened, ...rest } = props;

  return (
    <header data-testid="Header" className={classnames(styles.header, className)} {...rest}>
      <Logo />
      <Button theme="secondary" iconSrc={opened ? closeIcon : navIcon} rounded size="medium" />
    </header>
  );
};
