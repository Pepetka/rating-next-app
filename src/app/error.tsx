"use client";

import { notoSansKR } from "@/shared/fonts";
import { classnames } from "@/shared/lib/classnames";
import { Button } from "@/shared/ui/Button";
import { Heading } from "@/shared/ui/Heading";
import { Paragraph } from "@/shared/ui/Paragraph";
import "./globals.css";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <html lang="ru">
      <body className={classnames(notoSansKR.className)}>
        <Heading tag="h1">Error</Heading>
        <Paragraph>Error: {error.message}</Paragraph>
        <Button onClick={reset}>Reset</Button>
      </body>
    </html>
  );
};

export default Error;
