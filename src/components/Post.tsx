import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  post: {
    title: string;
    date: string;
    thumbnail?: string;
    desc?: string;
    content: string;
  };
}

const Post = ({ post }: Props) => {
  if (!post.content) {
    return <p>Error: No content available</p>;
  }

  return <MDXRemote source={post.content} />;
};

export default Post;
