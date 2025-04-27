import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { List } from "@/components";
import { getPostList } from "@/lib/mdx";
import ProfileImage from "@/assets/images/profile.png";

export const metadata: Metadata = {
  title: "ZINLOG",
  description: "현진 로그입니다.",
};

const Blog = async () => {
  const post = await getPostList("");

  return (
    <main className="flex flex-col items-center w-[100%] max-w-[750px] px-7">
      <div className="relative w-[100%] h-[150px] m-6 mt-12">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col z-50">
          <span className="text-22 text-gray_bg font-black text-right">
            WEB FRONTEND DEVELOPER
          </span>
          <span className="text-[80px] text-gray_bg italic font-black text-left leading-none z-50">
            ZINLOG
          </span>
        </div>
        {/* NOTE: bg 이미지 고민중 */}
        <Image
          className="w-[100%] h-[100%] bg-gray object-cover grayscale-[0.2]"
          src={ProfileImage}
          alt="profile"
        />
      </div>
      {/* NOTE: 경력 기술서 - 노션링크 추가 예정 */}
      <Link href="" className="hover:text-primary">
        &gt; more about me
      </Link>
      <section className="w-[100%]">
        <h1 className="flex justify-start gap-x-5 w-[100%] mt-8 my-5 mb-3 text-36 text-black">
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
    </main>
  );
};

export default Blog;
