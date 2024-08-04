import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";

import { blogLists } from "@/utils/blogData";

interface DesktopSectionFirstProps {
  page: any;
  lang: Locale;
}

export const Desktop_BlogSectionFirst: FC = () => {
  return (
    <section className="relative w-full min-h-screen h-auto">
      <div className="blogSectionFirst-bg"></div>
    </section>
  );
};

export const Desktop_BlogSectionSecond: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full min-h-screen h-auto">
      <div className="py-20 px-10 w-[80%] m-auto">
        <h1
          className={`text-black text-[24px] font-[500] ${
            lang === "en" ? "fcsubject_regular" : "fcsubject_regular"
          } `}
        >
          {page.blog.section1.desktop.description}
        </h1>
        <h1
          className={`text-black text-[60px] font-[500] uppercase ${
            lang === "en" ? "kiona_bold" : "fcsubject_bold"
          } `}
        >
          {page.blog.section1.desktop.title}
        </h1>
        <div className="mt-12 flex justify-center items-center gap-14 flex-wrap">
          {blogLists.map((item, idx) => (
            <div
              key={idx}
              className="2xl:w-[30%] xl:w-[30%] lg:w-[45%] md:w-[80%] w-[100%]"
            >
              <div>
                <Image
                  src={item.image}
                  className="w-full h-full object-cover bg-cover h-[200px]"
                  width={389}
                  height={279}
                  priority
                  alt="bannerBlog"
                />
              </div>
              <div className="mt-14">
                <h2 className="text-[18px] text-black text-[500]">
                  {item.title}
                </h2>
                <p className="text-[16px] text-black text-[500] mt-3">
                  {item.description}
                </p>
              </div>
              <div className="mt-8">
                <Link as={`/${lang}/blogs/${idx}`} href={""}>
                  <button
                    type="button"
                    className="text-white bg-black py-2 px-12 text-[14px]"
                  >
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
