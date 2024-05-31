import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";

import { blogLists } from "@/utils/blogData";

import BlogBG from "@/../assets/images/blogs/bg.png";

interface MobileSectionFirstProps {
  page: any;
  lang: Locale;
}

export const Mobile_BlogSectionFirst: FC<MobileSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full h-auto">
      <div className="relative w-full h-[320px]">
        <Image
          className="w-full h-full object-cover"
          src={BlogBG}
          width={1920}
          height={800}
          alt="bg"
        />
        <div className="absolute top-0 left-0 w-full h-full mt-16 flex justify-start items-center px-10">
          <div>
            <h1
              className={`text-white text-[28px] font-[400] ${
                lang === "en" ? "kiona_bold" : "fcsubject_bold"
              } `}
            >
              {page.blog.section1.mobile.title}
            </h1>
            <p
              dangerouslySetInnerHTML={{
                __html: page.blog.section1.mobile.description,
              }}
              className={`text-white text-[11px] font-[400] mt-4 ${
                lang === "en" ? "ttfors" : "fcsubject_regular"
              } `}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Mobile_BlogSectionSecond: FC = () => {
  return (
    <section className="relative w-full min-h-screen h-auto">
      <div className="mt-5 flex justify-center items-center gap-14 flex-wrap py-10">
        {blogLists.map((item, idx) => (
          <div
            key={idx}
            className="2xl:w-[30%] xl:w-[40%] lg:w-[45%] md:w-[80%] w-[80%]"
          >
            <div>
              <Image
                src={item.image}
                className="w-full h-full object-cover bg-cover"
                width={500}
                height={500}
                priority
                alt="bannerBlog"
              />
            </div>
            <div className="mt-14">
              <h2 className={`text-[15px] text-black font-[600]`}>
                {item.title}
              </h2>
              <p className={`text-[12px] text-black font-[500] mt-3`}>
                {item.description}
              </p>
            </div>
            <div className="flex justify-start items-start gap-2 mt-1">
              <div className="w-[75%] mt-2 border-t-[3px] border-black"></div>
              <Link href={`/blogs/${idx}`} className="w-[25%] ">
                <p className="text-center text-[#9B9FA4] text-[12px] font-[700] pt-4">
                  Read More
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
