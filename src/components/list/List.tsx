import Link from "next/link";
import React from "react";

interface ListProps {
  title: string;
  desc: string;
  date: string;
  category: string;
}

const List = ({ title, desc, date, category }: ListProps) => {
  return (
    <Link
      href="/1"
      className="flex flex-col px-5 py-6 w-4/5 max-w-[750px] border-b  border-b-primary hover:bg-primary_sub/10 hover:text-primary"
    >
      <h3 className="text-22 mb-2 font-bold">{title}</h3>
      <span className="block size-full text-14 text-gray  break-words text-overflow h-auto min-h-[42px] mb-5">
        {desc}
      </span>
      <div className="flex justify-end gap-5">
        <span className="text-14  text-gray">🗓️ {date}</span>
        <span className="text-14  text-gray">📂 {category}</span>
      </div>
    </Link>
  );
};

export default List;
