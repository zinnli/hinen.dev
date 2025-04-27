import Link from "next/link";

import { List } from "@/components";
import { getMarkdownInfos, getPostList } from "@/lib/mdx";

type Props = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = async ({ params, searchParams }: Props) => {
  const post = await getPostList(params.category);
  const categories = await getMarkdownInfos();

  const selectedCategory = searchParams.category;

  const totalCount = categories.reduce((acc, curr) => acc + curr.count, 0);

  const selectTextStyle = (isSelected: boolean) =>
    `text-16 ${isSelected ? "font-bold text-black" : "font-normal text-black/80"}`;

  return (
    <section className="flex flex-col items-center w-[100%] max-w-[750px] px-7">
      <div className="flex justify-start gap-x-[10px] w-[100%]  mt-12 mb-12">
        <Link className={selectTextStyle(!selectedCategory)} href={"/post"}>
          All({totalCount})
        </Link>
        {categories.map((item, i) => {
          return (
            <Link
              className={selectTextStyle(item.category === selectedCategory)}
              key={i}
              href={`?category=${item.category}`}
            >
              {item.category}({item.count})
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-y-2">
        {(selectedCategory
          ? post.filter((item) => item.categoryPath === selectedCategory)
          : post
        ).map((item) => {
          return (
            <List
              key={item.filePath}
              isPost
              category={item.categoryPath}
              date={item.date}
              desc={item.desc}
              path={`/post/${item.filePath}`}
              title={item.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Page;
