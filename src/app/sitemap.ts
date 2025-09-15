import { getPostList, getMarkdownInfos } from "@/lib/mdx";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const markdownInfos = await getMarkdownInfos(); // 카테고리 목록 불러오기

  // 각 카테고리별로 포스트 URL을 동적으로 생성
  const postUrls = await Promise.all(
    markdownInfos.map(async (info) => {
      const posts = await getPostList(info.category); // 각 카테고리별로 포스트 목록을 가져옴
      return posts.map((post) => ({
        url: `https://zinnli.github.io/${post.filePath}`, // 카테고리와 slug를 합쳐서 URL 구성
        lastModified: new Date(post.date),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }));
    })
  );

  // flatMap으로 각 카테고리별 URL들을 하나의 배열로 합침
  const allPostUrls = postUrls.flat();

  return allPostUrls;
}
