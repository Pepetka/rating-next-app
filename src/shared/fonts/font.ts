import { Noto_Sans_KR } from "next/font/google";

export const notoSansKR = Noto_Sans_KR({
  adjustFontFallback: false,
  display: "swap",
  preload: true,
  subsets: ["latin"],
  variable: "--font-family",
  weight: ["200", "300", "400", "500", "600", "700"],
});
