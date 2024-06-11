import { FC } from "react";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

interface DesktopSectionFirstProps {
  page: any;
  lang: Locale;
}

export const Desktop_OurteamSectionFirst: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full min-h-screen h-auto">
      <div className="desktop-ourteamSectionFirst-bg "></div>
      <div className="absolute top-0 left-0 2xl:w-[50%] xl:w-[55%] w-[80%] h-full flex justify-center items-center">
        <div className="p-32">
          <h1
            className={`text-white text-[40px] font-[600] ${
              lang === "en" ? "kiona_bold" : "fcsubject_bold"
            }`}
          >
            {page.ourteam.section1.desktop.title}
          </h1>
          <p
            className={`mt-14 text-white text-[24px] font-[600] ${
              lang === "en" ? "ttfors" : "fcsubject_regular"
            }`}
          >
            {page.ourteam.section1.desktop.description}
          </p>
        </div>
      </div>
    </section>
  );
};

import ceoProfile from "@/../assets/images/ourteam/background/sectionsecond/1.png";

export const Desktop_OurteamSectionSecond: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full min-h-screen h-auto bg-neutral-800">
      <div className="w-full min-h-screen h-full px-4 2xl:py-0 xl:py-0 py-20 2xl:flex xl:flex block justify-center flex-wrap items-center gap-6">
       
        <div className="2xl:w-[50%] xl:w-[50%] w-full h-full">
          <div className="2xl:w-[75%] xl:w-[75%] w-[50%] m-auto">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src={ceoProfile}
              alt="CeoProfile"
              draggable={false}
            />
          </div>
        </div>
        <div className="2xl:w-[32%] xl:w-[32%] w-[80%] 2xl:m-0 xl:m-0 m-auto mt-10 h-full">
          <div>
            <p
              className={`text-white font-[400] text-black/55 mt-3 ${
                lang === "en" ? "ttfors 2xl:text-[20px] xl:text-[18px] text-[20px]" : "fcsubject_regular text-[20px]"
              }`}
            >
              {page.ourteam.section2.desktop.para1}
            </p>
            <p
              className={`text-white font-[400] text-black/55 mt-12 ${
                lang === "en" ? "ttfors 2xl:text-[20px] xl:text-[18px] text-[20px]" : "fcsubject_regular text-[20px]"
              }`}
            >
              {page.ourteam.section2.desktop.para2}
            </p>
            <p
              className={`text-white  font-[400] text-black/55 mt-12 ${
                lang === "en" ? "ttfors 2xl:text-[20px] xl:text-[18px] text-[20px]" : "fcsubject_regular text-[20px]"
              }`}
            >
              {page.ourteam.section2.desktop.para3}
            </p>
          </div>
          <div className="mt-20">
            <h1
              className={`text-[#4ABB90] text-[48px] font-[600] ${
                lang === "en" ? "fcsubject_regular" : "kiona_bold"
              } leading-[50px]`}
            >
              {page.ourteam.section2.desktop.name}
            </h1>
            <p
              className={`text-[#4ABB90] text-[24px] font-[400] ${
                lang === "en" ? "ttfors" : "ttfors"
              }`}
            >
              {page.ourteam.section2.desktop.position}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import Team1 from "@/../assets/images/ourteam/background/sectionthird/1.png";
import Team2 from "@/../assets/images/ourteam/background/sectionthird/2.png";
import Team3 from "@/../assets/images/ourteam/background/sectionthird/3.png";

export const Desktop_OurteamSectionThird: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full h-auto bg-neutral-800">
      <div className="py-32 px-10">
        <h1
          className={`text-white text-[60px] font-[600] text-center ${
            lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
          }`}
        >
          {page.ourteam.section3.desktop.title}
        </h1>
        <div className="mt-20 flex justify-center items-center">
          <div className="relative">
            <Image width={550} height={550} src={Team1} alt="team1" />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <p
                className={`text-[#4ade80]  text-[24px] font-[600] text-center ${
                  lang === "en" ? "ttfors" : "ttfors"
                }`}
              >
                {page.ourteam.section3.desktop.pic1}
              </p>
            </div>
          </div>
          <div className="relative">
            <Image width={550} height={550} src={Team2} alt="team2" />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <p
                className={`text-[#4ade80] text-[24px] font-[600] text-center ${
                  lang === "en" ? "ttfors" : "ttfors"
                }`}
              >
                {page.ourteam.section3.desktop.pic2}
              </p>
            </div>
          </div>
          <div className="relative">
            <Image width={550} height={550} src={Team3} alt="team3" />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <p
                className={`text-[#4ade80] text-[24px] font-[600] text-center ${
                  lang === "en" ? "ttfors" : "ttfors"
                }`}
              >
                {page.ourteam.section3.desktop.pic3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import OurteamCard1 from "@/../assets/images/ourteam/background/sectionfourth/1.png";
import OurteamCard2 from "@/../assets/images/ourteam/background/sectionfourth/2.png";
import OurteamCard3 from "@/../assets/images/ourteam/background/sectionfourth/3.png";

export const Desktop_OurteamSectionFourth: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full min-h-screen h-auto bg-neutral-800">
      <div className="py-20 px-10">
        <div className="flex justify-center items-center">
          <div className="w-[30%] h-[380px]">
            <Image
              src={OurteamCard1}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              alt="card1"
            />
          </div>
          <div className="bg-[#A8A8A8] py-12 px-20 2xl:w-[50%] xl:w-[60%] w-[80%] duration-300 ml-[-3em] z-[2]">
            <h1
              className={`text-black text-[32px] font-[600] ${
                lang === "en" ? "kiona_bold" : "kiona_bold"
              }`}
            >
              {page.ourteam.section4.desktop.title1}
            </h1>
            <p
              className={`text-[#565857] text-[20px] font-[600] mt-4 text-black/55 ${
                lang === "en" ? "ttfors" : "fcsubject_regular"
              }`}
            >
              {page.ourteam.section4.desktop.description1}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-28">
          <div className="bg-[#E8E8E8] py-12 px-20 2xl:w-[50%] xl:w-[60%] w-[80%] duration-300 mr-[-3em] z-[2]">
            <h1
              className={`text-black text-[32px] font-[600] ${
                lang === "en" ? "kiona_bold" : "kiona_bold"
              }`}
            >
              {page.ourteam.section4.desktop.title2}
            </h1>
            <p
              className={`text-[#565857] text-[20px] font-[600] mt-4 text-black/55 ${
                lang === "en" ? "ttfors" : "fcsubject_regular"
              }`}
            >
              {page.ourteam.section4.desktop.description2}
            </p>
          </div>
          <div className="w-[30%] h-[380px]">
            <Image
              src={OurteamCard2}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              alt="card2"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-28">
          <div className="w-[30%] h-[380px]">
            <Image
              src={OurteamCard3}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              alt="card3"
            />
          </div>
          <div className="bg-[#E8E8E8] py-12 px-20 2xl:w-[50%] xl:w-[60%] w-[80%] duration-300 ml-[-3em] z-[2]">
            <h1
              className={`text-black text-[32px] font-[600] ${
                lang === "en" ? "kiona_bold" : "kiona_bold"
              }`}
            >
              {page.ourteam.section4.desktop.title3}
            </h1>
            <p
              className={`text-[#565857] text-[20px] font-[600] mt-4 text-black/55 ${
                lang === "en" ? "ttfors" : "fcsubject_regular"
              }`}
            >
              {page.ourteam.section4.desktop.description3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
