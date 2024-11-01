import type { Decorator } from "@storybook/react";
import { useEffect } from "react";
import { notoSansKR } from "@/shared/fonts";

export const FontsDecorator: Decorator = (Story) => {
  useEffect(() => {
    document.body.classList.add(notoSansKR.className, notoSansKR.className);
  }, []);

  return <Story />;
};
