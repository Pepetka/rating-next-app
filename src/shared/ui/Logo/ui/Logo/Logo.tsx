import Image from "next/image";
import logoIcon from "@/shared/assets/icons/logo.svg";
import { classnames } from "@/shared/lib/classnames";
import { AppLink, AppLinkProps } from "@/shared/ui/AppLink";
import styles from "./Logo.module.css";

interface LogoProps extends Omit<AppLinkProps, "href"> {
  href?: string;
}

export const Logo = (props: LogoProps) => {
  const { className, href = "/", ...rest } = props;

  return (
    <AppLink
      data-testid="Logo"
      href={href}
      className={classnames(styles.logo, className)}
      {...rest}
    >
      <Image src={logoIcon} alt="App Icon" width={41} height={38} className={styles.icon} />
      <span className={styles.name}>
        <span>OWL</span>
        top
      </span>
    </AppLink>
  );
};
