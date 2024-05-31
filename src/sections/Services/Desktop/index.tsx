import { FC } from "react";
import Image from "next/image";

import { Locale } from "@/i18n.config";

interface DesktopSectionFirstProps {
  page: any;
  lang: Locale;
}

export const Desktop_ServiceSectionFirst: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full min-h-screen h-auto">
      <div className="desktop-serviceSectionFirst-bg"></div>
      <div className="bg-black/20 absolute w-full h-full z-[-1]"></div>
      <div className="w-full min-h-screen h-auto flex justify-center items-center">
        <div className="w-[65%]">
          <h1
            dangerouslySetInnerHTML={{
              __html: page.services.section1.desktop.title,
            }}
            className={`text-white text-[45px] font-[600] text-center ${
              lang === "en" ? "kiona_bold" : "fcsubject_bold"
            }`}
          ></h1>
          <p
            className={`text-white font-[400] text-center mt-24 ${
              lang === "en"
                ? "ttfors text-[24px]"
                : "fcsubject_regular text-[30px]"
            }`}
          >
            {page.services.section1.desktop.description1}
          </p>
        </div>
      </div>
    </section>
  );
};

import service1 from "@/../assets/images/services/sectionsecond/1.png";
import service2 from "@/../assets/images/services/sectionsecond/2.png";
import service3 from "@/../assets/images/services/sectionsecond/3.png";
import service4 from "@/../assets/images/services/sectionsecond/4.png";

export const Desktop_ServiceSectionSecond: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  return (
    <section className="relative w-full min-h-screen h-auto">
      <div className="px-10 py-32">
        <h1
          className={`text-center text-black  font-[400] w-[60%] m-auto ${
            lang === "en"
              ? "ttfors text-[24px]"
              : "fcsubject_regular text-[30px]"
          }`}
        >
          {page.services.section1.desktop.description2}
        </h1>
        <div className="mt-32 flex justify-center items-center gap-4">
          <div>
            <a href="#innovative">
              <div className="relative">
                <Image
                  width={500}
                  height={500}
                  className="object-cover"
                  src={service1}
                  alt="serivce1"
                />
                <div className="absolute top-0 left-0 w-full py-4 px-6">
                  <p
                    className={`text-white text-[30px] font-[600] ${
                      lang === "en" ? "kiona_bold" : "kiona_bold"
                    }`}
                  >
                    {page.services.section2.desktop.innovative.name}
                  </p>
                </div>
              </div>
            </a>
            <a href="#panelcladding">
              <div className="relative mt-4">
                <Image
                  width={500}
                  height={500}
                  className="object-cover"
                  src={service2}
                  alt="service2"
                />
                <div className="absolute bottom-0 left-0 w-full py-4 px-6">
                  <p
                    className={`text-white text-[30px] font-[600] ${
                      lang === "en" ? "kiona_bold" : "kiona_bold"
                    }`}
                  >
                    {page.services.section2.desktop.panelcladding.name}
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="#section_louver">
              <div className="relative">
                <Image
                  width={675}
                  height={675}
                  className="object-cover"
                  src={service3}
                  alt="serivce3"
                />
                <div className="absolute bottom-0 left-0 w-full py-4 px-6">
                  <p
                    className={`text-white text-[30px] font-[600] text-center ${
                      lang === "en" ? "kiona_bold" : "kiona_bold"
                    }`}
                  >
                    {page.services.section2.desktop.louver.name}
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="#preforated">
              <div className="relative">
                <Image
                  width={376}
                  height={376}
                  className="object-cover"
                  src={service4}
                  alt="serivce4"
                />
                <div className="absolute bottom-0 left-0 w-full py-4 px-6">
                  <p
                    className={`text-white text-[30px] font-[600] text-center ${
                      lang === "en" ? "kiona_bold" : "kiona_bold"
                    }`}
                  >
                    {page.services.section2.desktop.preforated.name}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import Service1_1 from "@/../assets/images/services/sectionfourth/1_1.png";
import Service1_2 from "@/../assets/images/services/sectionfourth/1_2.png";
import Service1_3 from "@/../assets/images/services/sectionfourth/1_3.png";

export const Desktop_ServiceSectionFourth: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  //ยังไม่ได้ทำ text ในส่วนของ description
  const itemLists = [
    {
      image: Service1_1,
      title: `${page.services.section2.desktop.louver.items.first.title}`,
      description: `${page.services.section2.desktop.louver.items.first.description}`,
    },
    {
      image: Service1_2,
      title: `${page.services.section2.desktop.louver.items.second.title}`,
      description: `${page.services.section2.desktop.louver.items.second.description}`,
    },
    {
      image: Service1_3,
      title: `${page.services.section2.desktop.louver.items.third.title}`,
      description: `${page.services.section2.desktop.louver.items.third.description}`,
    },
  ];
  return (
    <section
      id="section_louver"
      className="relative w-full min-h-screen h-auto"
    >
      <div className="desktop-serviceSectionFourth-bg"></div>
      <div className="flex justify-end items-center w-full h-full py-10 px-20">
        <div className="2xl:w-[45%] xl:w-[60%] w-[80%] h-full">
          <h1
            className={`text-white text-[56px] font-[700] ${
              lang === "en" ? "kiona_bold" : "kiona_bold"
            }`}
          >
            {page.services.section2.desktop.louver.name}
          </h1>
          <h2
            className={`text-white text-[30px] font-[700] ${
              lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
            }`}
          >
            {page.services.section2.desktop.louver.title1}
          </h2>
          <div className="mt-14">
            <div>
              <h1
                className={`text-[24px] font-[700] text-white ${
                  lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.section2.desktop.louver.title2}
              </h1>
              <p
                className={`text-[16px] font-[400] text-white ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.section2.desktop.louver.description1}
              </p>
            </div>
          </div>
          <div className="mt-14">
            <div>
              <h1
                className={`text-[24px] font-[700] text-white ${
                  lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.section2.desktop.louver.title3}
              </h1>
              <p
                className={`text-[16px] font-[400] text-white ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.section2.desktop.louver.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 pb-10 flex justify-end items-center w-full h-full">
        <div className="w-full flex 2xl:justify-end xl:justify-end justify-center items-center gap-20 px-20">
          {itemLists.map((item, idx) => (
            <div key={idx} className="w-[340px] min-h-[350px] h-auto">
              <div className="w-[280px]">
                <Image
                  src={item.image}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  alt="image"
                  draggable={false}
                />
              </div>
              <div className="mt-4">
                <h1
                  className={`text-[20px] font-[700] text-white ${
                    lang === "en" ? "kiona_bold" : "kiona_bold"
                  }`}
                >
                  {item.title}
                </h1>
                <p
                  className={`text-white text-[16px] font-[500] ${
                    lang === "en" ? "ttfors" : "fcsubject_regular"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import Service2_1 from "@/../assets/images/services/sectionfourth/2_1.png";
import Service2_2 from "@/../assets/images/services/sectionfourth/2_2.png";
import Service2_3 from "@/../assets/images/services/sectionfourth/2_3.png";
import Service2_4 from "@/../assets/images/services/sectionfourth/2_4.png";

export const Desktop_ServiceSectionFifth: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  const itemLists = [
    {
      image: Service2_1,
      title: `${page.services.section2.desktop.preforated.items.first.title}`,
      description: `${page.services.section2.desktop.preforated.items.first.description}`,
    },
    {
      image: Service2_2,
      title: `${page.services.section2.desktop.preforated.items.second.title}`,
      description: `${page.services.section2.desktop.preforated.items.second.description}`,
    },
    {
      image: Service2_3,
      title: `${page.services.section2.desktop.preforated.items.third.title}`,
      description: `${page.services.section2.desktop.preforated.items.third.description}`,
    },
    {
      image: Service2_4,
      title: `${page.services.section2.desktop.preforated.items.forth.title}`,
      description: `${page.services.section2.desktop.preforated.items.forth.description}`,
    },
  ];
  return (
    <section id="preforated" className="relative w-full min-h-screen h-auto">
      <div className="desktop-serviceSectionFifth-bg"></div>
      <div className="flex justify-start items-center w-full h-full py-10 px-20">
        <div className="2xl:w-[45%] xl:w-[60%] w-[80%] h-full">
          <h1
            className={`text-white text-[56px] font-[700] ${
              lang === "en" ? "kiona_bold" : "kiona_bold"
            }`}
          >
            {page.services.section2.desktop.preforated.name}
          </h1>
          <h2
            className={`text-white text-[30px] font-[700] ${
              lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
            }`}
          >
            {page.services.section2.desktop.preforated.title1}
          </h2>
          <div className="mt-14">
            <div>
              <h1
                className={`text-[24px] font-[700] text-white ${
                  lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.section2.desktop.preforated.title2}
              </h1>
              <p
                className={`text-[16px] font-[400] text-white ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.section2.desktop.preforated.description1}
              </p>
            </div>
          </div>
          <div className="mt-14">
            <div>
              <h1
                className={`text-[24px] font-[700] text-white ${
                  lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.section2.desktop.preforated.title3}
              </h1>
              <p
                className={`text-[16px] font-[400] text-white ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.section2.desktop.preforated.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 pb-20 flex justify-start items-center w-[98%] m-auto h-full overflow-x-auto">
        <div className="w-full flex justify-start items-center gap-20 px-20">
          {itemLists.map((item, idx) => (
            <div key={idx} className="w-[340px] min-h-[350px] h-auto">
              <div className="w-[280px]">
                <Image
                  src={item.image}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  alt="image"
                  draggable={false}
                />
              </div>
              <div className="mt-4">
                <h1
                  className={`text-[20px] font-[700] text-white ${
                    lang === "en" ? "kiona_bold" : "kiona_bold"
                  }`}
                >
                  {item.title}
                </h1>
                <p
                  className={`text-white text-[16px] font-[500] ${
                    lang === "en" ? "ttfors" : "fcsubject_regular"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import Service3_1 from "@/../assets/images/services/sectionfourth/3_1.png";
import Service3_2 from "@/../assets/images/services/sectionfourth/3_2.png";
import Service3_3 from "@/../assets/images/services/sectionfourth/3_3.png";
import Service3_4 from "@/../assets/images/services/sectionfourth/3_4.png";

export const Desktop_ServiceSectionSixth: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  const itemLists = [
    {
      image: Service3_1,
      title: `${page.services.section2.desktop.panelcladding.items.first.title}`,
      description: `${page.services.section2.desktop.panelcladding.items.first.description}`,
    },
    {
      image: Service3_2,
      title: `${page.services.section2.desktop.panelcladding.items.second.title}`,
      description: `${page.services.section2.desktop.panelcladding.items.second.description}`,
    },
    {
      image: Service3_3,
      title: `${page.services.section2.desktop.panelcladding.items.third.title}`,
      description: `${page.services.section2.desktop.panelcladding.items.third.description}`,
    },
    {
      image: Service3_4,
      title: `${page.services.section2.desktop.panelcladding.items.forth.title}`,
      description: `${page.services.section2.desktop.panelcladding.items.forth.description}`,
    },
  ];
  return (
    <section id="panelcladding" className="relative w-full min-h-screen h-auto">
      <div className="desktop-serviceSectionSixth-bg"></div>
      <div className="flex justify-end items-center w-full h-full py-10 px-20">
        <div className="2xl:w-[45%] xl:w-[60%] w-[80%] h-full">
          <h1
            className={`text-white text-[56px] font-[700] ${
              lang === "en" ? "kiona_bold" : "kiona_bold"
            }`}
          >
            {page.services.section2.desktop.panelcladding.name}
          </h1>
          <h2
            className={`text-white text-[30px] font-[700] ${
              lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
            }`}
          >
            {page.services.section2.desktop.panelcladding.title1}
          </h2>
          <div className="mt-14">
            <div>
              <h1
                className={`text-[24px] font-[700] text-white ${
                  lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.section2.desktop.panelcladding.title2}
              </h1>
              <p
                className={`text-[16px] font-[400] text-white ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.section2.desktop.panelcladding.description1}
              </p>
            </div>
          </div>
          <div className="mt-14">
            <div>
              <h1
                className={`text-[24px] font-[700] text-white ${
                  lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.section2.desktop.panelcladding.title3}
              </h1>
              <p
                className={`text-[16px] font-[400] text-white ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.section2.desktop.panelcladding.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 pb-10 flex justify-end items-center w-[98%] m-auto h-full overflow-x-auto">
        <div className="w-full flex 2xl:justify-end xl:justify-end justify-start items-center gap-20 px-20">
          {itemLists.map((item, idx) => (
            <div key={idx} className="w-[340px] min-h-[350px] h-auto">
              <div className="w-[280px]">
                <Image
                  src={item.image}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  alt="image"
                  draggable={false}
                />
              </div>
              <div className="mt-4">
                <h1
                  className={`text-[20px] font-[700] text-white ${
                    lang === "en" ? "kiona_bold" : "kiona_bold"
                  }`}
                >
                  {item.title}
                </h1>
                <p
                  className={`text-white text-[16px] font-[500] ${
                    lang === "en" ? "ttfors" : "fcsubject_regular"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import Service4_1 from "@/../assets/images/services/sectionfourth/4_1.png";
import Service4_2 from "@/../assets/images/services/sectionfourth/4_2.png";
import Service4_3 from "@/../assets/images/services/sectionfourth/4_3.png";
import Service4_4 from "@/../assets/images/services/sectionfourth/4_4.png";

export const Desktop_ServiceSectionSeventh: FC<DesktopSectionFirstProps> = ({
  page,
  lang,
}) => {
  const itemLists = [
    {
      image: Service4_1,
      title: `${page.services.section2.desktop.innovative.items.first.title}`,
      description: `${page.services.section2.desktop.innovative.items.first.description}`,
    },
    {
      image: Service4_2,
      title: `${page.services.section2.desktop.innovative.items.second.title}`,
      description: `${page.services.section2.desktop.innovative.items.second.description}`,
    },
    {
      image: Service4_3,
      title: `${page.services.section2.desktop.innovative.items.third.title}`,
      description: `${page.services.section2.desktop.innovative.items.third.description}`,
    },
    {
      image: Service4_4,
      title: `${page.services.section2.desktop.innovative.items.forth.title}`,
      description: `${page.services.section2.desktop.innovative.items.forth.description}`,
    },
  ];
  return (
    <section id="innovative" className="relative w-full min-h-screen h-auto">
      <div className="desktop-serviceSectionSeventh-bg"></div>
      <div className="flex justify-start items-center w-full h-full py-10 px-20">
        <div className="2xl:w-[45%] xl:w-[60%] w-[80%] h-full">
          <h1
            className={`text-white text-[56px] font-[700] ${
              lang === "en" ? "kiona_bold" : "kiona_bold"
            }`}
          >
            {page.services.section2.desktop.innovative.name2}
          </h1>
          <h2
            className={`text-white text-[30px] font-[700] ${
              lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
            }`}
          >
            {page.services.section2.desktop.innovative.title1}
          </h2>
          <div className="mt-14">
            <div>
              <h1
                className={`text-[24px] font-[700] text-white ${
                  lang === "en" ? "ttfors" : "ttfors"
                }`}
              >
                {page.services.section2.desktop.innovative.title2}
              </h1>
              <p
                className={`text-[16px] font-[400] text-white ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.section2.desktop.innovative.description1}
              </p>
            </div>
          </div>
          <div className="mt-14">
            <div>
              <h1
                className={`text-[24px] font-[700] text-white ${
                  lang === "en" ? "ttfors" : "ttfors"
                }`}
              >
                {page.services.section2.desktop.innovative.title3}
              </h1>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    page.services.section2.desktop.innovative.description2,
                }}
                className={`text-[16px] font-[400] text-white ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              ></p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 pb-20 flex justify-start items-center w-[98%] m-auto h-full overflow-x-auto">
        <div className="w-full flex justify-start items-center gap-20 px-20">
          {itemLists.map((item, idx) => (
            <div key={idx} className="w-[340px] min-h-[350px] h-auto">
              <div className="w-[280px]">
                <Image
                  src={item.image}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  alt="image"
                  draggable={false}
                />
              </div>
              <div className="mt-4">
                <h1
                  className={`text-[20px] font-[700] text-white ${
                    lang === "en" ? "kiona_bold" : "kiona_bold"
                  }`}
                >
                  {item.title}
                </h1>
                <p
                  className={`text-white text-[16px] font-[500] ${
                    lang === "en" ? "ttfors" : "fcsubject_regular"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
