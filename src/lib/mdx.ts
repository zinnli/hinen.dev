import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BASE_PATH = "src/markdown";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

type PostMeta = {
  title: string;
  date: string;
  thumbnail?: string;
  desc?: string;
};

type Post = {
  title: string;
  date: string;
  thumbnail?: string;
  desc?: string;
  content: any;
};

export const parsePostDetail = async (postPath: string): Promise<Post> => {
  const fileContents = fs.readFileSync(postPath, "utf8");

  const { data, content } = matter(fileContents);
  const grrayMatter = data as PostMeta;

  return { ...grrayMatter, content };
};

export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}.mdx`;

  return await parsePostDetail(filePath);
};
