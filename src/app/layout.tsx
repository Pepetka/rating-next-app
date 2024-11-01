import type { Metadata } from "next";
import { ReactNode } from "react";
import { notoSansKR } from "@/shared/fonts";
import { classnames } from "@/shared/lib/classnames";
import { Layout } from "@/widgets/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rating Next App",
  description: "Rating Next App",
};

const RootLayout = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <html lang="ru">
      <body className={classnames(notoSansKR.className)}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
