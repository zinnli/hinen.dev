import { Post } from "@/components";
import { getPostDetail } from "@/lib/mdx";

type Props = {
  params: { category: string; slug: string };
};

const PostDetail = async ({ params }: Props) => {
  const post = await getPostDetail(params.category, params.slug);

  return (
    <article className="flex flex-col w-4/5 max-w-[700px] py-10">
      <h2 className="text-primary text-36 font-bold mb-10">{post.title}</h2>
      <span className="mb-8 text-right">{post.date}</span>
      <Post post={post} />
    </article>
  );
};

export default PostDetail;
