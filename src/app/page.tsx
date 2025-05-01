import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { List } from "@/components";
import { getPostList } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "ZINLOG",
  description: "현진 로그입니다.",
};

const Blog = async () => {
  const post = await getPostList("");

  return (
    <>
      <div className="relative w-[100%] h-[180px] m-6 mt-10">
        <div className="absolute bottom-[20px] right-[20px] transform flex flex-col z-50">
          <span className="text-[30px] text-gray_bg italic font-black text-right leading-none z-50">
            LEE HYUN JIN
          </span>
          <span className="text-14 text-gray_bg font-black text-right">
            WEB FRONTEND DEVELOPER
          </span>
        </div>
        {/* NOTE: bg 이미지 고민중 */}
        <Image
          className="w-[100%] h-[100%] bg-gray object-cover"
          fill
          src="/profile.jpeg"
          alt="profile"
        />
      </div>
      {/* NOTE: 경력 기술서 - 노션링크 추가 예정 */}
      <Link href="" className="hover:text-primary">
        &gt; more about me
      </Link>
      <section className="w-[100%]">
        <h1 className="flex justify-start gap-x-5 w-[100%] mt-7 my-5 mb-3 text-30 text-black">
          <span>Recent</span>
          <span className="font-black">Posts</span>
        </h1>
        <div className="flex flex-col gap-y-2">
          {post.slice(0, 3).map((item) => {
            return (
              <List
                key={item.filePath}
                isPost={false}
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
    </>
  );
};

export default Blog;
