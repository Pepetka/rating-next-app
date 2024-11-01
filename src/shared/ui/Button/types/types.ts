import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonTheme = "primary" | "secondary" | "clear";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  size?: "small" | "medium" | "large";
  children?: ReactNode;
  className?: string;
  iconSrc?: string;
  iconDirection?: "top" | "right" | "bottom" | "left";
  rounded?: boolean;
}

interface ButtonPropsStandard extends BaseButtonProps {
  theme?: "secondary" | "primary";
}

interface ButtonPropsClear extends BaseButtonProps {
  theme: "clear";
  rounded?: never;
  size?: never;
}

export type ButtonProps = ButtonPropsStandard | ButtonPropsClear;
