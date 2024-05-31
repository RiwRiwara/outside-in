import { FC, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { blogLists } from "@/utils/blogData";
import { Locale } from "@/i18n.config";
import Slideshow from "@/components/slideshow";

interface DesktopSectionFirstProps {
  page: any;
  lang: Locale;
}

export const Desktop_HomeSectionFirst: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full h-screen">
      <div className="z-[-1] absolute top-0 left-0 w-full h-full">
        <Slideshow />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="text-center m-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h1
              className={`text-white text-[50px] font-bold ${
                lang === "en" ? "kiona_bold" : "kiona_bold"
              }`}
            >
              {page.home.section1.desktop.title}
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <h2
              className={`text-white text-[36px] font-bold mt-20 w-[55%] m-auto ${
                lang === "en" ? "ttfors" : "fcsubject_regular"
              }`}
            >
              {page.home.section1.desktop.sub_title}
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Desktop_HomeSectionSecond: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const translateX = useTransform(
    scrollY,
    [0, 900, 900, 1800],
    [-500, 1, 1, 200]
  );
  const opacity = useTransform(scrollY, [0, 900, 900, 1800], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-x-hidden">
      <motion.div
        transition={{ duration: 0.5 }}
        style={{ translateX, opacity }}
        className="desktop-sectionSecond-bg 2xl:bg-cover bg-contain"
      ></motion.div>
      <div className="w-full h-full flex justify-center">
        <motion.div
          transition={{ duration: 0.5 }}
          style={{ translateX, opacity }}
          className="relative w-[50%] h-[28dvh]"
        >
          <h1
            className={`absolute bottom-0 left-[5vw] w-full 2xl:text-[54px] text-[40px] text-black font-semibold ${
              lang === "en" ? "kiona_bold" : "fcsubject_bold"
            } tracking-[.60rem]`}
          >
            WHAT IS <span className="text-[#4ABB90]">FACADE ?</span>
          </h1>
        </motion.div>
        <div className="w-[38%] flex justify-start items-center">
          <div>
            <h1
              className={`text-black text-[30px] font-semibold ${
                lang === "en" ? "kiona_bold" : "fcsubject_bold"
              } tracking-[.10rem]`}
            >
              {page.home.section2.desktop.title}
            </h1>
            <p
              className={`text-[18px] font-[400] mt-6 text-black/60 ${
                lang === "en" ? "ttfors" : "fcsubject_regular"
              }`}
              dangerouslySetInnerHTML={{
                __html: page.home.section2.desktop.description.para1,
              }}
            ></p>
            <p
              className={`text-[18px] font-[400] mt-6 text-black/60 ${
                lang === "en" ? "ttfors" : "fcsubject_regular"
              }`}
              dangerouslySetInnerHTML={{
                __html: page.home.section2.desktop.description.para2,
              }}
            ></p>
            <p
              className={`text-[18px] font-[400] mt-6 text-black/60 ${
                lang === "en" ? "ttfors" : "fcsubject_regular"
              }`}
            >
              {page.home.section2.desktop.description.para3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Desktop_HomeSectionThird: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  const { scrollY } = useScroll();
  const translateY = useTransform(
    scrollY,
    [0, 1000, 2000, 3000],
    [0, 300, 0, -300]
  );
  const opacity = useTransform(scrollY, [0, 1000, 2000, 3000], [0, 1, 1, 0]);

  return (
    <section className="relative w-full h-screen">
      <div className="desktop-sectionThird-bg"></div>
      <motion.div
        style={{ translateY, opacity }}
        className="flex justify-center items-center w-full h-full"
      >
        <div
          className={`text-center text-white ${
            lang === "en" ? "w-[70%]" : "w-[100%]"
          } m-auto`}
        >
          <p
            className={`text-[30px] font-[400] ${
              lang === "en" ? "fcsubject_regular" : "fcsubject_regular"
            } `}
          >
            {page.home.section3.desktop.title1}
          </p>
          <h1
            className={`text-[50px] font-bold my-5 ${
              lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
            }`}
          >
            {page.home.section3.desktop.title2_first}
            <span style={{ color: "#4ABB90" }}>
              {page.home.section3.desktop.title2_mid}
            </span>
            {page.home.section3.desktop.title2_second}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: page.home.section3.desktop.description,
            }}
            className={`text-[24px] font-[400] mt-6 ${
              lang === "en" ? "fcsubject_regular" : "fcsubject_regular"
            }`}
          ></p>
        </div>
      </motion.div>
    </section>
  );
};

export const Desktop_HomeSectionFourth: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="bg-[#383838]">
      <div className="relative min-h-screen h-auto w-[70%] m-auto pb-20 pt-32 ">
        <div>
          <h2
            className={`text-white text-[18px] font-[500] ${
              lang === "en" ? "ttfors" : "fcsubject_regular"
            }`}
          >
            {page.home.section4.desktop.title1}
          </h2>
          <h1
            className={`text-white text-[58px] font-[600] ${
              lang === "en" ? "kiona_bold" : "fcsubject_bold"
            } uppercase`}
          >
            {page.home.section4.desktop.title2}
          </h1>
        </div>
        <div className="mt-12 flex justify-center flex-row items-center gap-14 flex-wrap">
          {blogLists.map((item, idx) => (
            <div
              key={idx}
              className="2xl:w-[30%] xl:w-[40%] lg:w-[45%] md:w-[80%] w-[100%]"
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
                <h2
                  className={`text-[18px] text-white text-[500] ${
                    lang === "en" ? "kiona_bold" : "kiona_bold"
                  }`}
                >
                  {item.title}
                </h2>
                <p
                  className={`text-[16px] text-white text-[500] mt-3 ${
                    lang === "en" ? "ttfors" : "fcsubject_regular"
                  }`}
                >
                  {item.description}
                </p>
              </div>
              <div className="mt-8">
                <button
                  type="button"
                  className="text-white bg-[#4ABB90] py-2 px-12 text-[14px] rounded"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
