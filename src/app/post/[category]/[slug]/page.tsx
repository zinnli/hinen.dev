import type { Metadata } from "next";

import { Post } from "@/components";
import { getPostDetail, getPostPaths, parseMarkdownPath } from "@/lib/mdx";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const post = await getPostDetail(category, slug);

  const title = post.title;

  return {
    title,
    description: post.desc,

    openGraph: {
      title,
      description: post.desc,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths
    .map((path) => parseMarkdownPath(path))
    .map((item) => ({
      category: item.categoryPath,
      slug: item.filePath,
    }));

  return paramList;
}

const PostDetail = async ({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) => {
  const { category, slug } = await params;
  const post = await getPostDetail(category, slug);

  return (
    <section className="flex flex-col w-[100%] max-w-[700px] px-4 py-10">
      <h2 className="flex justify-center w-[100%] text-primary text-40 font-bold mb-10">
        {post.title}
      </h2>
      <span className="mb-8 text-right">{post.date}</span>
      <Post post={post} />
    </section>
  );
};

export default PostDetail;
