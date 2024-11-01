import type { InputHTMLAttributes } from "react";
import { classnames } from "@/shared/lib/classnames";
import { Button } from "@/shared/ui/Button";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  withButton?: boolean;
  iconSrc?: string;
}

export const Input = (props: InputProps) => {
  const { className, iconSrc, ...rest } = props;

  return (
    <div data-testid="Input" className={classnames(styles.wrapper, className)}>
      <input className={styles.input} {...rest} />
      {iconSrc && (
        <Button className={styles.button} theme="primary" size="small" iconSrc={iconSrc} />
      )}
    </div>
  );
};
