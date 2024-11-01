import type { HTMLAttributes } from "react";
import { Category } from "@/entities/Category";
import searchIcon from "@/shared/assets/icons/search.svg";
import { classnames } from "@/shared/lib/classnames";
import { Input } from "@/shared/ui/Input";
import { Logo } from "@/shared/ui/Logo";
import styles from "./Sidebar.module.css";

interface SidebarProps extends HTMLAttributes<HTMLElement> {}

export const Sidebar = async (props: SidebarProps) => {
  const { className, ...rest } = props;

  return (
    <aside data-testid="Sidebar" className={classnames(styles.sidebar, className)} {...rest}>
      <Logo className={styles.logo} />
      <Input className={styles.inputWrapper} iconSrc={searchIcon} placeholder="Поиск..." />
      <Category item={0} />
    </aside>
  );
};
