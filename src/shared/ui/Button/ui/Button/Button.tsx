import Image from "next/image";
import { classnames } from "@/shared/lib/classnames";
import type { ButtonProps } from "../../types/types";
import styles from "./Button.module.css";

const getIconSize = (args: Pick<ButtonProps, "size" | "rounded">) => {
  const { size, rounded } = args;

  if (size === "small") {
    return { width: 15, height: 15 };
  }

  if (rounded) {
    return { width: 20, height: 20 };
  }

  return { width: 10, height: 10 };
};

export const Button = (props: ButtonProps) => {
  const {
    theme = "primary",
    size = "large",
    children,
    className,
    iconDirection = "right",
    iconSrc,
    type = "button",
    rounded = false,
    ...rest
  } = props;

  const { width, height } = getIconSize(props);

  return (
    <button
      data-testid="Button"
      className={classnames(styles.button, styles[theme], styles[size], className, {
        [styles.rounded]: rounded,
      })}
      type={type}
      {...rest}
    >
      {children}
      {iconSrc && (
        <Image
          src={iconSrc}
          className={classnames(styles.icon, styles[iconDirection])}
          width={width}
          height={height}
          alt="arrow"
          priority
        />
      )}
    </button>
  );
};
