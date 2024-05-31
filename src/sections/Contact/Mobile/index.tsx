import ContactForm from "@/sections/ContactForm";
import { FC } from "react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

interface MobileSectionFirstProps {
  page: any;
  lang: "th" | "en"
}


export const Mobile_ContactSectionFirst: FC<MobileSectionFirstProps> = ({ page, lang }) => {
  return (
    <section className="relative w-full min-h-screen h-auto">
      <div className="mobile-contactSectionFirst-bg"></div>
      <div className="absolute bottom-[130px] left-0 w-full h-auto p-4">
        <div className="w-[90%] m-auto">
          <h1 className={`text-white text-[28px] font-[600] text-center ${
            lang === 'en' ? "kiona_bold" : "kiona_bold"
          }`}>
          {page.contact.section1.mobile.title}
          </h1>
        <div dangerouslySetInnerHTML={{
              __html: page.contact.section1.mobile.description,
            }} className={`text-white font-[700] text-center mt-10 ${
              lang === "en" ? "ttfors text-[13px]" : "fcsubject_bold text-[13px]"
            }`}>
        </div></div>
        
      </div>
    </section>
  );
};

interface MobileContactProps {
  page: any;
  lang: Locale
}

export const Mobile_ContactSectionSecond: FC<MobileContactProps> = ({
  page,
  lang
}) => {
     return (
          <ContactForm page={page} lang={lang} />
     )
}
