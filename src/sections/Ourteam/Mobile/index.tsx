"use client";
import { FC, useState } from "react";
import Image from "next/image";

interface MobileSectionFirstProps {
  page: any;
  lang: "th" | "en";
}

export const Mobile_OurteamSectionFirst: FC<MobileSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full h-auto pb-10">
      <div className="mobile-ourteamSectionFirst-bg"></div>
      <div className="pb-32 pt-52 px-10 relative">
        <h1
          dangerouslySetInnerHTML={{
            __html: page.ourteam.section1.mobile.title,
          }}
          className={`text-white text-[20px] font-[700] text-center ${
            lang === "en" ? "kiona_bold" : "fcsubject_bold"
          }`}
        ></h1>
      </div>
      <div
        className={`mt-8  m-auto px-8 py-2 text-[#F0F0F0]  font-[500] text-center ${
          lang === "en"
            ? "ttfors w-11/12 text-[12px]"
            : "fcsubject_regular w-80 text-[12px]"
        }`}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: page.ourteam.section1.mobile.description1,
          }}
        ></p>
        <p className={"pt-4"}>{page.ourteam.section1.mobile.description2}</p>
      </div>
    </section>
  );
};

import OurteamCard1 from "@/../assets/images/ourteam/background/sectionfourth/1.png";
import OurteamCard2 from "@/../assets/images/ourteam/background/sectionfourth/2.png";
import OurteamCard3 from "@/../assets/images/ourteam/background/sectionfourth/3.png";

import Logo from "@/../assets/images/topbar/outside_logo.png";

//ยังไม่ได้ทำภาษาติด description

export const Mobile_OurteamSectionSecond: FC<MobileSectionFirstProps> = ({
  page,
  lang,
}) => {
  const [getOurteamLists, setOurteamLists] = useState([
    {
      image: OurteamCard1,
      title: `${page.ourteam.section2.mobile.title1}`,
      description: `${page.ourteam.section2.mobile.description1}`,
      active: false,
      delayHidden: false,
    },
    {
      image: OurteamCard2,
      title: `${page.ourteam.section2.mobile.title2}`,
      description: `${page.ourteam.section2.mobile.description2}`,
      active: false,
      delayHidden: false,
    },
    {
      image: OurteamCard3,
      title: `${page.ourteam.section2.mobile.title3}`,
      description: `${page.ourteam.section2.mobile.description3}`,
      delayHidden: false,
    },
  ]);
  return (
    <section className="relative w-full min-h-screen h-auto bg-[#050505] mt-[-1px]">
      <div className="py-10 px-6">
        {getOurteamLists.map((item, idx) => (
          <div key={idx} className="my-12">
            <div
              onClick={() => {
                getOurteamLists.map((item, idx) => {
                  item.active = false;
                });
                const updatedLists = [...getOurteamLists];
                updatedLists[idx].active = updatedLists[idx].active
                  ? false
                  : true;
                setOurteamLists(updatedLists);
              }}
              className="w-full h-[250px] relative"
            >
              <Image
                width={500}
                height={500}
                className={`w-full h-full object-cover ${
                  item.active ? "" : "gray-filter"
                }`}
                src={item.image}
                alt="OurteamCard1"
              />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <p
                  className={`text-white text-[16px] font-[600] text-center ${
                    lang === "en" ? "kiona_bold" : "kiona_bold"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            </div>
            <div
              className={`mt-5 ${
                item.active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 absolute w-[88%]"
              } duration-300`}
            >
              <p
                className={`text-white text-[12px] font-[500] ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
        <div className="pt-10">
          <div className="w-[40%] m-auto">
            <Image
              src={Logo}
              width={300}
              height={300}
              className="w-full h-full object-cover"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Mobile_OurteamSectionThird: FC<MobileSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full min-h-screen h-auto bg-black z-[-1] mt-[-1px]">
      <div className="mobile-ourteamSectionThird-bg">
        <div className="text-white flex justify-center items-end w-full h-full px-10 py-10 bg-gradient-to-b from-black/2 to-black">
          <div>
            <p
              className={`text-justify text-[11px] ${
                lang === "en" ? "ttfors" : "fcsubject_regular"
              }`}
              dangerouslySetInnerHTML={{
                __html: page.ourteam.section3.mobile.para1,
              }}
            ></p>
            <p
              className={`text-justify text-[11px] mt-6 ${
                lang === "en" ? "ttfors" : "fcsubject_regular"
              }`}
            >
              {page.ourteam.section3.mobile.para2}
            </p>
            <p
              className={`text-justify text-[11px] mt-6 ${
                lang === "en" ? "ttfors" : "fcsubject_regular"
              }`}
            >
              {page.ourteam.section3.mobile.para3}
            </p>
            <p
              className={`mt-16 text-[16px] font-[600] text-right ${
                lang === "en" ? "kiona_bold" : "fcsubject_bold"
              }`}
            >
              {page.ourteam.section3.mobile.name}
            </p>
            <p
              className={`mt-2 text-[12px] font-[400] text-right ${
                lang === "en" ? "kiona_bold" : "fcsubject_bold"
              }`}
            >
              {page.ourteam.section3.mobile.position}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
