import Link from "next/link";
import type { Metadata } from "next";

import { List } from "@/components";
import { getMarkdownInfos, getPostList } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "ZINLOG | POST",
  description: "공부한 내용을 정리, 공유합니다.",
};

export async function generateStaticParams() {
  const categories = await getMarkdownInfos(); // 카테고리 목록을 가져오는 작업이 필요

  // 카테고리 목록을 기반으로 정적 경로 생성
  return categories.map((category) => ({
    params: { category: category.category },
  }));
}

const Post = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;

  const post = await getPostList(category);
  const categories = await getMarkdownInfos();

  const totalCount = categories.reduce((acc, curr) => acc + curr.count, 0);

  const selectTextStyle = (isSelected: boolean) =>
    `text-16 ${isSelected ? "font-bold text-black" : "font-normal text-black/80"}`;

  return (
    <main className="flex flex-col items-center w-[100%] max-w-[750px] px-7">
      <div className="flex justify-start gap-x-[10px] w-[100%]  mt-12 mb-12">
        <Link className={selectTextStyle(!category)} href={"/post"}>
          All({totalCount})
        </Link>
        {categories.map((item, i) => {
          return (
            <Link
              className={selectTextStyle(item.category === category)}
              key={i}
              href={`post/${item.category}`}
            >
              {item.category}({item.count})
            </Link>
          );
        })}
      </div>
      <section className="flex flex-col gap-y-2 w-[100%]">
        {(category
          ? post.filter((item) => item.categoryPath === category)
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
