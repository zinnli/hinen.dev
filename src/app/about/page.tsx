import Image from "next/image";
import type { Metadata } from "next";

import ProfileImage from "@/assets/images/about-profile.jpeg";

export const metadata: Metadata = {
  title: "ZINLOG | ABOUT",
  description: "저를 소개합니다.",
};

const About = () => {
  return (
    <main className="flex flex-col items-center w-[100%] max-w-[800px] px-7">
      <section className="flex flex-col mt-12 w-[100%]">
        <div className="flex justify-start gap-x-5 w-[100%] h-[100px] mb-10">
          <Image
            className="w-[100px] h-[100px] rounded-full bg-gray object-cover"
            src={ProfileImage}
            alt="profile"
          />
          <div className="flex flex-col justify-start py-[5px]">
            <div className="flex gap-x-2 text-20 font-bold text-primary">
              <span>이현진</span>
              <span>LEE HYUNJIN</span>
            </div>
            <span className=" text-18 text-primary_sub">
              Frontend developer
            </span>
          </div>
        </div>
        <span>아름다운 UI를 사랑하고 구현해내는데서 행복을 느낍니다.</span>
      </section>
    </main>
  );
};

export default About;
