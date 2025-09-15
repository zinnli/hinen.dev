import type { Metadata } from "next";
import Head from "next/head";

import { Footer, Header } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "HINEN",
  description: "배운 것을 기록하는 개발 블로그입니다.",
  openGraph: {
    title: "히넨로그",
    type: "website",
    url: "https://zinnli.github.io/",
    siteName: "히넨로그",
    images: [
      {
        url: "https://zinnli.github.io/og_image.png",
        width: 800,
        height: 400,
        alt: "히넨로그",
      },
    ],
  },
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
        <meta
          name="google-site-verification"
          content="CP1man3cxFwR-70NpyFfiyBclXRYHUT-N95WLnl5Ydo"
        />
      </Head>
      <body className="flex flex-col items-center justify-between h-[100vh] bg-gray_bg">
        <main className="flex flex-col items-center w-[100%] max-w-[800px] px-7">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
