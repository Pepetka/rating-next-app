import { useCallback, useMemo, useState, MouseEvent } from "react";

interface UseHoverParams {
  onEnter?: () => void;
  onLeave?: () => void;
}

type UseHoverOutput = [
  boolean,
  {
    onMouseEnter: (e: MouseEvent<HTMLElement>) => void;
    onMouseLeave: (e: MouseEvent<HTMLElement>) => void;
  },
];

export const useHover = (params: UseHoverParams = {}): UseHoverOutput => {
  const { onEnter, onLeave } = params;
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      onEnter?.();
      setIsHovered(true);
    },
    [onEnter],
  );

  const onMouseLeave = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      onLeave?.();
      setIsHovered(false);
    },
    [onLeave],
  );

  return useMemo(
    () => [isHovered, { onMouseEnter, onMouseLeave }],
    [isHovered, onMouseEnter, onMouseLeave],
  );
};
