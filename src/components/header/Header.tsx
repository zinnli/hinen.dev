import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex w-4/5 max-w-[750px] gap-5 py-3 px-7 border-b border-b-primary">
      <Link href="/" className="text-22 text-primary">
        HOME
      </Link>
      <Link href="/post" className="text-22 text-primary">
        POSTS
      </Link>
      <Link href="/project" className="text-22 text-primary">
        PROJECTS
      </Link>
      <Link href="/about" className="text-22 text-primary">
        ABOUT
      </Link>
    </header>
  );
};

export default Header;
