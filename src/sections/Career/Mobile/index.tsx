"use client";
import { FC } from "react";
import Image from "next/image";
import careerBg from "@/../assets/images/career/bg_mobile.png";
import logo from "@/../assets/images/topbar/outside_logo.png";

interface MobileSectionFirstProps {
  page: any;
  lang: "th" | "en";
}

export const Mobile_CareerSectionFirst: FC<MobileSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full min-h-screen h-auto">
      <div className="relative w-full h-[400px]">
        <Image
          className="w-full h-full object-cover grayscale"
          src={careerBg}
          width={1920}
          height={400}
          alt="bg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div>
            <div className="w-[200px] h-auto m-auto mb-4 mt-8">
              <Image src={logo} width={500} height={500} alt="logo" />
            </div>
            <h1 className="text-white text-[32px] font-[500] text-center">
              {page.career.section1.mobile.header}
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#383A3B] w-full min-h-screen h-auto px-6 py-20">
        <div className="w-[90%] m-auto">
          <h1
            className={`text-white text-[16px] font-[400] text-center ${
              lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
            }`}
          >
            {page.career.section1.mobile.title}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: page.career.section1.mobile.description,
            }}
            className={`text-white text-[10px] font-[400] text-center mt-8 ${
              lang === "en" ? "ttfors" : "fcsubject_regular"
            }`}
          ></p>
          <div className="mt-[60px]">
            <h1
              className={`text-white text-[16px] font-[400] text-center ${
                lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
              }`}
            >
              {page.career.section1.mobile.job}
            </h1>
            <div
              className={`mt-8 flex justify-between items-center text-white text-[14px] px-8 font-[400] w-full m-auto py-4 border-y-[2px] border-white ${
                lang === "en" ? "ttfors" : "ttfors"
              }`}
            >
              <p>{page.career.section1.mobile.position}</p>
              <p>{page.career.section1.mobile.subposition}</p>
            </div>
          </div>
          <div className="mt-8">
            <p
              dangerouslySetInnerHTML={{
                __html: page.career.section1.desktop.recomment,
              }}
              className={`text-white text-[11px] font-[400] text-center ${
                lang === "en" ? "fcsubject_regular" : "fcsubject_regular"
              }`}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};
