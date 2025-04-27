import type { Metadata } from "next";
import Head from "next/head";

import { Header } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZINLOG",
  description: "현진 로그입니다.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <Head>
        <link
          href="http://cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body className="flex flex-col items-center bg-gray_bg">
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
