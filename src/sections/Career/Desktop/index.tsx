import { FC } from "react";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";


import careerBg from "@/../assets/images/career/bg.png";

interface DesktopSectionFirstProps {
  page: any
  lang: Locale
}

export const Desktop_CareerSectionFirst: FC<DesktopSectionFirstProps> = ({page, lang}) => {
  return (
    <section className="relative w-full min-h-screen h-auto">
      <div className="w-full h-[500px]">
        <Image
          className="w-full h-full object-cover"
          src={careerBg}
          width={1920}
          height={500}
          alt="bg"
        />
      </div>
      <div className="bg-[#383A3B] w-full min-h-screen h-auto px-10 py-20">
        <div className="w-[80%] m-auto">
          <h1 className={`text-white text-[50px] font-[600] text-center ${
                lang === "en" ? "kiona_bold" : "fcsubject_bold"
              }`}>
          {page.career.section1.desktop.header}
          </h1>
          <p dangerouslySetInnerHTML={{
              __html: page.career.section1.desktop.description,
            }} className={`text-white text-[25px] font-[500] text-center mt-8 ${
              lang === "en" ? "ttfors" : "fcsubject_regular"
            }`}>
            
          </p>
          <div className="mt-60">
            <h1 className={`text-white text-[50px] font-[600] text-center ${
                lang === "en" ? "kiona_bold" : "fcsubject_bold"
              }`}>
            {page.career.section1.desktop.job}
            </h1>
            <div className={`mt-20 flex justify-between items-center text-white text-[25px] font-[600] 2xl:w-[60%] xl:w-[70%] w-[80%] m-auto py-6 px-20 border-y-[2px] border-white ${
              lang === "en" ? "ttfors" : "ttfors"
            }`}>
              <p>{page.career.section1.desktop.position}</p>
              <p>{page.career.section1.desktop.subposition}</p>
            </div>
          </div>
          <div className="mt-20">
            <p dangerouslySetInnerHTML={{
              __html: page.career.section1.desktop.recomment,
            }} className={`text-white text-[28px] font-[400] text-center `}>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
