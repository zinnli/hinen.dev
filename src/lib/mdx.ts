import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";

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
  const grayMatter = data as PostMeta;
  const date = dayjs(grayMatter.date).locale("ko").format("MMM DD, YYYY");

  return { ...grayMatter, content, date };
};

export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}.mdx`;

  return await parsePostDetail(filePath);
};
