export type PostMetaType = {
  title: string;
  date: string;
  desc: string;
};

export type PostType = {
  title: string;
  date: string;
  desc: string;
  content: string;
};

export type MarkdownType = {
  categoryPath: string;
  filePath: string;
};

export type PostListType = PostMetaType & MarkdownType;
