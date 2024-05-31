"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

interface MobileSectionFirstProps {
  page: any;
  lang: Locale;
}

export const Mobile_ServiceSectionFirst: FC<MobileSectionFirstProps> = ({
  page,
  lang,
}) => {
  const [selectType, setSelectType] = useState("START");

  const searchParams = useSearchParams();
  const search = searchParams.get("type");

  useEffect(() => {
    if (search !== null) {
      setSelectType(search);
    }
  }, []);

  const menuLists = [
    {
      title: "LOUVER",
      route: `/services/louver`,
    },
    {
      title: "PERFORATED",
      route: `/services/perforated`,
    },
    {
      title: "PANEL CLADDING",
      route: `/services/panel_cladding`,
    },
    {
      title: "INNOVATIVE & ADATIVE",
      route: `/services/innovative_adative`,
    },
  ];

  return (
    <section className="relative w-full min-h-screen h-auto bg-black">
      {selectType === "START" && (
        <div className="absolute top-0 left-0 w-full min-h-screen h-auto z-[0] service-mobile-start-bg"></div>
      )}
      <div className="absolute top-0 left-0 w-full h-full px-4 py-32 m-auto z-[1] overflow-y-auto">
        {(selectType === "START" && (
          <>
            <h1
              dangerouslySetInnerHTML={{
                __html: page.services.section2.mobile.title,
              }}
              className={`text-white font-[600] text-center pt-16 tracking-[-0.408px] ${
                lang === "en"
                  ? "kiona_bold text-[20px]"
                  : "fcsubject_bold text-[20px]"
              }`}
            ></h1>
            <div className="mt-[170px]">
              <p
                dangerouslySetInnerHTML={{__html: page.services.section2.mobile.description}}
                className={`text-white text-[14px] font-[500] text-center tracking-[-0.408px] w-[250px] m-auto ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              ></p>
            </div>
            <div className="mt-14 text-center">
              <button
                onClick={() => setSelectType("MAIN")}
                type="button"
                className="text-white text-[14px] font-[700] border-[1px] border-white py-[8px] px-[70px] w-[85%]"
              >
                FACADE TYPE
              </button>
            </div>
          </>
        )) ||
          (selectType === "MAIN" && (
            <div className="px-5 pt-6">
              <h1
                className={`text-white text-[23 px] font-[700] leading-5 text-center ${
                  lang === "en" ? "kiona_bold" : "kiona_bold"
                }`}
              >
                {page.services.section2.mobile.title2}
              </h1>
              <p
                className={`text-white text-[14px] w-[84%] font-[500] text-center mt-5 m-auto ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.section2.mobile.description2}
              </p>
              <div className="mt-14 border-b-[1.8px] border-white">
                {menuLists.map((item, idx) => (
                  <Link as={`/${lang}/${item.route}`} href="" key={idx}>
                    <div className="border-t-[1.8px] border-white py-[12px] text-center">
                      <p
                        className={`text-white text-[20px] font-[500] ${
                          lang === "en" ? "kiona_bold" : "kiona_bold"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-28">
                <Link href="/contact">
                  <button
                    type="button"
                    className="text-white py-[8px] px-[60px] border-[1px] border-white w-[85%]"
                  >
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
