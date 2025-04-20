import { List } from "@/components";
import { getPostList } from "@/lib/mdx";

const Home = async () => {
  const post = await getPostList("");

  return (
    <main className="flex flex-col items-center w-[100%] max-w-[750px] px-7">
      <div className="w-[100%] h-[250px] bg-primary_sub m-6 mt-12">
        자기소개
      </div>
      <h1 className="flex justify-start gap-x-5 w-[100%] text-50 text-primary my-7 mb-4">
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

export default Home;
