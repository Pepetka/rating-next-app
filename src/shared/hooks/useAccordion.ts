import { CSSProperties, useCallback, useMemo, useState } from "react";

interface Options {
  duration?: number;
  marginBlock?: string;
  initialOpen?: boolean;
}

export const useAccordion = (opts: Options = {}) => {
  const { duration = 300, marginBlock, initialOpen = false } = opts;

  const [isOpen, setIsOpen] = useState(initialOpen);

  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const wrapperStyle: CSSProperties = useMemo(
    () => ({
      display: "grid",
      gridTemplateRows: isOpen ? "1fr" : "0fr",
      overflow: "hidden",
      transition: `all ${duration}ms ease-in-out`,
    }),
    [duration, isOpen],
  );

  const style: CSSProperties = useMemo(
    () => ({
      minHeight: 0,
      marginBlock: isOpen && marginBlock ? marginBlock : "0px 0px",
      transition: `all ${duration}ms ease-in-out`,
    }),
    [duration, isOpen, marginBlock],
  );

  return {
    style,
    wrapperStyle,
    onToggle,
    isOpen,
  };
};
