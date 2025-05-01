import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZINLOG | ABOUT",
  description: "저를 소개합니다.",
};

const About = () => {
  return (
    <>
      <section className="flex flex-col mt-12 w-[100%]">
        <div className="flex flex-col justify-start py-[5px] mb-10">
          <div className="flex gap-x-2 text-20 font-bold text-primary">
            <span>이현진</span>
            <span>LEE HYUNJIN</span>
          </div>
          <span className=" text-18 text-primary_sub">Frontend developer</span>
        </div>
        <span>아름다운 UI를 사랑하고 구현해내는데서 행복을 느낍니다.</span>
      </section>
    </>
  );
};

export default About;
