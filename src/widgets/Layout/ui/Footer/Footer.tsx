import type { HTMLAttributes } from "react";
import { classnames } from "@/shared/lib/classnames";
import { AppLink } from "@/shared/ui/AppLink";
import styles from "./Footer.module.css";

interface FooterProps extends HTMLAttributes<HTMLElement> {}

const links = [
  {
    name: "Пользовательское соглашение",
    href: "/",
  },
  {
    name: "Политика конфиденциальности",
    href: "/",
  },
];

export const Footer = (props: FooterProps) => {
  const { className, ...rest } = props;

  return (
    <footer data-testid="Footer" className={classnames(styles.footer, className)} {...rest}>
      OwlTop © 2020 - 2021 Все права защищены
      <ul className={styles.links}>
        {links.map(({ name, href }) => (
          <li key={name}>
            <AppLink href={href} className={styles.link}>
              {name}
            </AppLink>
          </li>
        ))}
      </ul>
    </footer>
  );
};
