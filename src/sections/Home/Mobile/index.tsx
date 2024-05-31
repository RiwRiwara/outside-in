import { FC } from "react";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import Slideshow from "@/components/slideshow";

interface MobileSectionFirstProps {
  page: any;
  lang: Locale;
}

export const Mobile_HomeSectionFirst: FC<MobileSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full h-screen">
      <Slideshow />
      <div className="absolute bottom-0 left-0 w-full px-6 pb-14">
        <p
          dangerouslySetInnerHTML={{ __html: page.home.section1.mobile.title }}
          className={`text-white text-center text-[24px] font-[500] leading-12 ${
            lang === "en" ? "kiona_bold" : "kiona_bold"
          } `}
        ></p>
        <p
          dangerouslySetInnerHTML={{__html: page.home.section1.mobile.sub_title}}
          className={`mt-8 text-center  font-[400] text-white w-72 m-auto ${
            lang === "en" ? "ttfors text-[14px]" : "fcsubject_regular text-[14px]"
          }`}
        ></p>
        <div className="mt-8 text-center">
          <Link href="/services">
            <button
              type="button"
              className="text-black bg-white py-2 px-8 text-[12px] font-[600]"
            >
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const Mobile_HomeSectionSecond: FC<MobileSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full min-h-screen h-auto">
      <div className="mobile-sectionSecond-bg"></div>
      <div className="px-10 py-20 text-center w-full h-full">
        <div
          dangerouslySetInnerHTML={{
            __html: page.home.section2.mobile.title,
          }}
          className={`text-white text-[24px] font-[600] ${
            lang === "en" ? "kiona_bold" : "kiona_bold"
          }`}
        ></div>
        <div
          className={`mt-20 text-white text-[13px] font-[400] w-80 m-auto ${
            lang === "en" ? "ttfors" : "fcsubject_regular"
          }`}
        >
          <p 
            dangerouslySetInnerHTML={{__html: page.home.section2.mobile.description.para1}}
          ></p>
          <p 
            dangerouslySetInnerHTML={{__html: page.home.section2.mobile.description.para2}}
            className={`mt-10 w-80 m-auto `}
          ></p>
        </div>
      </div>
      <div className="w-11/12 pb-20 text-center m-auto ">
        <Link href="/services">
          <button
            type="button"
            className="text-white py-2 px-6 w-[80%] border-[2px] border-white text-[14px] font-[500]"
          >
            SERVICE
          </button>
        </Link>
        <Link href="/ourteam">
          <button
            type="button"
            className="text-white py-2 px-6 w-[80%] border-[2px] border-white text-[14px] font-[500] mt-12"
          >
            OUR TEAM
          </button>
        </Link>
      </div>
    </section>
  );
};
