import Link from "next/link";
import type { Metadata } from "next";

import { List } from "@/components";
import { getMarkdownInfos, getPostList } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "ZINLOG | POST",
  description: "공부한 내용을 정리, 공유합니다.",
};

const Post = async ({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { category } = await params;
  const searchParamsData = await searchParams;

  const post = await getPostList(category);
  const categories = await getMarkdownInfos();

  const selectedCategory = searchParamsData.category;

  const totalCount = categories.reduce((acc, curr) => acc + curr.count, 0);

  const selectTextStyle = (isSelected: boolean) =>
    `text-16 ${isSelected ? "font-bold text-black" : "font-normal text-black/80"}`;

  return (
    <main className="flex flex-col items-center w-[100%] max-w-[750px] px-7">
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
      <section className="flex flex-col gap-y-2 w-[100%]">
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
      </section>
    </main>
  );
};

export default Post;
