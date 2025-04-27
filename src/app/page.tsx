import Image from "next/image";

import { List } from "@/components";
import { getPostList } from "@/lib/mdx";
import ProfileImage from "../assets/images/profile.webp";

const Blog = async () => {
  const post = await getPostList("");

  return (
    <main className="flex flex-col items-center w-[100%] max-w-[750px] px-7">
      <div className="relative w-[100%] h-[250px] m-6 mt-12">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col z-50">
          <span className="text-30 text-gray_bg font-black text-right">
            WEB FRONTEND DEVELOPER
          </span>
          <span className="text-[100px] text-gray_bg italic font-black text-left leading-none z-50">
            ZINLOG
          </span>
        </div>
        <Image
          className="w-[100%] h-[100%] bg-gray object-cover grayscale-[0.2]"
          src={ProfileImage}
          alt="profile"
        />
      </div>
      <h1 className="flex justify-start gap-x-5 w-[100%] mt-10 my-5 mb-4 text-50 text-primary">
        <span>Recent</span>
        <span className="font-black">Posts</span>
      </h1>
      <div className="flex flex-col gap-y-2">
        {post.map((item) => {
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
    </main>
  );
};

export default Blog;
