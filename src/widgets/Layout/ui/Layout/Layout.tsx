import type { ReactNode } from "react";
import { Footer } from "@/shared/ui/Footer";
import { Header } from "@/shared/ui/Header";
import { Sidebar } from "@/shared/ui/Sidebar";
import styles from "./Layout.module.css";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div data-testid="Layout" className={styles.layout}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
