import Link from "next/link";
import React from "react";

import FolderIcon from "../../assets/icons/ic_folder.svg";
import CalendarIcon from "../../assets/icons/ic_calendar.svg";

interface ListProps {
  title: string;
  desc: string;
  date: string;
  category: string;
  path: string;
}

const List = ({ title, desc, date, category, path }: ListProps) => {
  return (
    <Link
      href={path}
      className="flex flex-col px-4 py-3 border-b w-[100%] border-b-primary_sub/30 hover:text-primary"
    >
      <h3 className="text-20 mb-1 font-bold text-black">{title}</h3>
      <span className="block size-full text-12 text-gray  break-words text-overflow h-auto mb-3">
        {desc}
      </span>
      <div className="flex justify-end gap-2">
        <p className="flex gap-x-1">
          <FolderIcon className="h-[18px] w-[18px] fill-gray" />
          <span className="text-12  text-gray min-w-[50px]">{category}</span>
        </p>
        <p className="flex gap-x-1">
          <CalendarIcon className="h-[18px] w-[18px] fill-gray" />
          <span className="text-12  text-gray">{date}</span>
        </p>
      </div>
    </Link>
  );
};

export default List;
