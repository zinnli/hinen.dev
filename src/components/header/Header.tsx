"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const currentPath = pathname.split("/")[1];

  const textBoldStyle = (path: string): string =>
    `text-20 ${currentPath === path || (!currentPath && path === "home") ? "text-primary border-b border-b-primary_sub_30 font-bold" : "text-primary/80"}  hover:font-bold`;

  return (
    <header className="sticky top-0 flex w-[100%] max-w-[750px] gap-5 py-3 px-7 border-b-primary_sub/20 bg-gray_bg">
      <Link href="/" className={textBoldStyle("home")}>
        HOME
      </Link>
      <Link href="/post" className={textBoldStyle("post")}>
        POSTS
      </Link>
      <Link href="/project" className={textBoldStyle("project")}>
        PROJECTS
      </Link>
      <Link href="/about" className={textBoldStyle("about")}>
        ABOUT
      </Link>
    </header>
  );
};

export default Header;
