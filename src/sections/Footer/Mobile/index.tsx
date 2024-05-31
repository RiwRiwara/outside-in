import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";

import facebookIcon from "@/../assets/images/home/background/sectionthird/mobile/facebook-icon.png";
import igIcon from "@/../assets/images/home/background/sectionthird/mobile/instargram-icon.png";
import lineIcon from "@/../assets/images/home/background/sectionthird/mobile/line-icon.png";

interface MobileSectionFirstProps {
  page: any;
  lang: Locale;
}

export const Mobile_Footer: FC<MobileSectionFirstProps> = ({ page, lang }) => {
  return (
    <section className="relative w-full h-screen">
      <div className="px-10 pt-[30px]">
        <div>
          <h1
            dangerouslySetInnerHTML={{
              __html: page.footer.section1.mobile.title,
            }}
            className={`text-black text-[16px] font-[400] leading-[25px] ${
              lang === "en" ? "ttfors" : "fcsubject_regular"
            }`}
          ></h1>
          <div className="mt-[32px] text-start">
            <Link href="/contact">
              <button
                type="button"
                className="bg-black py-[6px] px-[20px] w-[42%] text-white text-[14px] font-[600]"
              >
                Send to us
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <h1
            dangerouslySetInnerHTML={{
              __html: page.footer.section1.mobile.para1,
            }}
            className={`text-[14px] font-[700] text-black w-[80%] ${
              lang === "en" ? "ttfors" : "fcsubject_bold"
            }`}
          ></h1>
          <p
            className={`mt-[16px] text-black text-[14px] font-[400] ${
              lang === "en" ? "ttfors" : "fcsubject_regular"
            }`}
            dangerouslySetInnerHTML={{
              __html: page.footer.section1.mobile.address,
            }}
          ></p>
          <p
            className={`mt-2 text-black text-[14px] font-[400] ${
              lang === "en" ? "ttfors" : "ttfors"
            }`}
          >
            {page.footer.section1.mobile.tel}
          </p>
          <p
            className={`mt-2 text-black text-[14px] font-[400] ${
              lang === "en" ? "ttfors" : "ttfors"
            }`}
          >
            {page.footer.section1.mobile.mail}
          </p>
          <div className="mt-[32px] flex justify-start items-center gap-4">
            <div className="w-[10%]">
              <a
                href="https://www.facebook.com/outsideincompany"
                target="_blank"
              >
                <Image
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  src={facebookIcon}
                  alt="icon"
                />
              </a>
            </div>
            <div className="w-[10%]">
              <a
                href="https://www.instagram.com/outsideincompany"
                target="_blank"
              >
                <Image
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  src={igIcon}
                  alt="icon"
                />
              </a>
            </div>
            <div className="w-[10%]">
              <a
                href="https://line.me/R/ti/p/@868rwxzl?oat_content=url"
                target="_blank"
              >
                <Image
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  src={lineIcon}
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Link as={`/${lang}/policy`} href={""}>
          <div className="w-full 2xl:text-right xl:text-right lg:text-right md:text-right sm:text-right text-center p-5 mt-10 cursor-pointer underline underline-offset-2">
            <p className="text-black text-[16px]">{page.policy.label}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
