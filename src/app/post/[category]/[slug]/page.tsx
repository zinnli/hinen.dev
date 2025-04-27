import { Post } from "@/components";
import { getPostDetail } from "@/lib/mdx";

const PostDetail = async ({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) => {
  const { category, slug } = await params;

  const post = await getPostDetail(category, slug);

  return (
    <article className="flex flex-col w-[100%] max-w-[700px] px-4 py-10">
      <h2 className="flex justify-center w-[100%] text-primary text-40 font-bold mb-10">
        {post.title}
      </h2>
      <span className="mb-8 text-right">{post.date}</span>
      <Post post={post} />
    </article>
  );
};

export default PostDetail;
