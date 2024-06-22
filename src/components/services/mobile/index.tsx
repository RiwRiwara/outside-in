"use client";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";

import { Mobile_Footer } from "@/sections/Footer/Mobile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

import Service1_1 from "@/../assets/images/services/sectionfourth/1_1.png";
import Service1_2 from "@/../assets/images/services/sectionfourth/1_2.png";
import Service1_3 from "@/../assets/images/services/sectionfourth/1_3.png";

interface MobileSectionFirstProps {
  page: any;
  lang: Locale;
}

export const Mobile_Louver: FC<MobileSectionFirstProps> = ({ page, lang }) => {
  const typeLists = [
    {
      image: Service1_1,
      title: `${page.services.components.mobile.louver.items.first.title}`,
      description: `${page.services.components.mobile.louver.items.first.description}`,
    },
    {
      image: Service1_2,
      title: `${page.services.components.mobile.louver.items.second.title}`,
      description: `${page.services.components.mobile.louver.items.second.description}`,
    },
    {
      image: Service1_3,
      title: `${page.services.components.mobile.louver.items.third.title}`,
      description: `${page.services.components.mobile.louver.items.third.description}`,
    },
  ];

  return (
    <>
      <section className="relative w-full min-h-[100dvh] h-auto">
        <div className="mobile-serviceSectionLouver-bg"></div>
        <div className="pt-[346px] pb-[160px] flex flex-col justify-start items-start min-h-[100dvh] h-auto px-10">
          <div>
            <h1
              className={`text-white text-[24px] font-[700] ${
                lang === "en" ? "kiona_bold_bold" : "kiona_bold_bold"
              }`}
            >
              LOUVER
            </h1>
            <p
              className={`text-white text-[14px] font-[700] mt-[12px] ${
                lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
              }`}
            >
              {page.services.components.mobile.louver.title1}
            </p>
            <div className="mt-[40px] text-white text-[14px] font-[700]">
              <h1
                className={`text-[14px] font-[700] text-white ${
                  lang === "en" ? "kiona_bold_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.components.mobile.louver.title2}
              </h1>
              <p
                className={`text-[10px] font-[400] text-white mt-[8px] ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.components.mobile.louver.description1}
              </p>
            </div>
            <div className="mt-8 text-white text-[14px] font-[700]">
              <h1
                className={`text-[14px] font-[700] text-white ${
                  lang === "en" ? "kiona_bold_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.components.mobile.louver.title3}
              </h1>
              <p
                className={`text-[10px] font-[400] text-white mt-[8px] ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.components.mobile.louver.description2}
              </p>
            </div>
            <div className="mt-[60px]">
              <Link as={`/${lang}/services?type=MAIN`} href="">
                <div className="w-[25px] h-[25px] p-4 bg-white rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faAngleLeft} className="text-[20px]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-auto py-[40px] border-b-[3px] border-black">
        <Carousel
          infinite={true}
          showDots={false}
          responsive={responsive}
          autoPlay={false}
          transitionDuration={500}
          pauseOnHover={true}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {typeLists.map((item, idx) => (
            <div key={idx} className="m-auto w-[80%]">
              <div className="w-full h-full">
                <Image
                  className="w-full h-full object-cover"
                  src={item.image}
                  width={300}
                  height={300}
                  alt="image"
                />
              </div>
              <div className="mt-[12px]">
                <h1
                  className={`text-black text-[20px] font-[700] ${
                    lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
                  }`}
                >
                  {item.title}
                </h1>
                <p
                  className={`text-black text-[14px] font-[500] mt-[8px] ${
                    lang === "en" ? "ttfors" : "fcsubject_regular"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <Mobile_Footer page={page} lang={lang} />
    </>
  );
};

import Service2_1 from "@/../assets/images/services/sectionfourth/2_1.png";
import Service2_2 from "@/../assets/images/services/sectionfourth/2_2.png";
import Service2_3 from "@/../assets/images/services/sectionfourth/2_3.png";
import Service2_4 from "@/../assets/images/services/sectionfourth/2_4.png";

//ใน typeLists ยังไม่ได้ใส่ text ส่วนของ description

export const Mobile_Perforated: FC<MobileSectionFirstProps> = ({
  page,
  lang,
}) => {
  const typeLists = [
    {
      image: Service2_1,
      title: `${page.services.components.mobile.preforated.items.first.title}`,
      description: `${page.services.components.mobile.preforated.items.first.description}`,
    },
    {
      image: Service2_2,
      title: `${page.services.components.mobile.preforated.items.second.title}`,
      description: `${page.services.components.mobile.preforated.items.second.description}`,
    },
    {
      image: Service2_3,
      title: `${page.services.components.mobile.preforated.items.third.title}`,
      description: `${page.services.components.mobile.preforated.items.third.description}`,
    },
    {
      image: Service2_4,
      title: `${page.services.components.mobile.preforated.items.forth.title}`,
      description: `${page.services.components.mobile.preforated.items.forth.description}`,
    },
  ];

  return (
    <>
      <section className="relative w-full min-h-[100dvh] h-auto">
        <div className="mobile-serviceSectionPerforated-bg"></div>
        <div className="pt-[346px] pb-[160px] flex flex-col justify-start items-start min-h-[100dvh] h-auto px-10">
          <div>
            <h1
              className={`text-black text-[24px] font-[700] ${
                lang === "en" ? "kiona_bold_bold" : "kiona_bold_bold"
              }`}
            >
              PERFORATED
            </h1>
            <p
              className={`text-white text-[14px] font-[700] mt-[12px] ${
                lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
              }`}
            >
              {page.services.components.mobile.preforated.title1}
            </p>
            <div className="mt-[40px] text-white text-[14px] font-[700]">
              <h1
                className={`text-[14px] font-[700] text-white ${
                  lang === "en" ? "kiona_bold_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.components.mobile.preforated.title2}
              </h1>
              <p
                className={`text-[10px] font-[400] text-white mt-[8px] ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.components.mobile.preforated.description1}
              </p>
            </div>
            <div className="mt-8 text-white text-[14px] font-[700]">
              <h1
                className={`text-[14px] font-[700] text-white ${
                  lang === "en" ? "kiona_bold_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.components.mobile.preforated.title3}
              </h1>
              <p
                className={`text-[10px] font-[400] text-white mt-[8px] ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.components.mobile.preforated.description2}
              </p>
            </div>
            <div className="mt-[60px]">
              <Link as={`/${lang}/services?type=MAIN`} href="">
                <div className="w-[25px] h-[25px] p-4 bg-white rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faAngleLeft} className="text-[20px]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-auto py-[40px] border-b-[3px] border-black">
        <Carousel
          infinite={true}
          showDots={false}
          responsive={responsive}
          autoPlay={false}
          transitionDuration={500}
          pauseOnHover={true}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {typeLists.map((item, idx) => (
            <div key={idx} className="m-auto w-[80%]">
              <div className="w-full h-full">
                <Image
                  className="w-full h-full object-cover"
                  src={item.image}
                  width={300}
                  height={300}
                  alt="image"
                />
              </div>
              <div className="mt-[12px]">
                <h1
                  className={`text-black text-[20px] font-[700] ${
                    lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
                  }`}
                >
                  {item.title}
                </h1>
                <p
                  className={`text-black text-[14px] font-[500] mt-[8px] ${
                    lang === "en" ? "ttfors" : "fcsubject_regular"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <Mobile_Footer page={page} lang={lang} />
    </>
  );
};

import Service3_1 from "@/../assets/images/services/sectionfourth/3_1.png";
import Service3_2 from "@/../assets/images/services/sectionfourth/3_2.png";
import Service3_3 from "@/../assets/images/services/sectionfourth/3_3.png";
import Service3_4 from "@/../assets/images/services/sectionfourth/3_4.png";

export const Mobile_PanelCladding: FC<MobileSectionFirstProps> = ({
  page,
  lang,
}) => {
  const typeLists = [
    {
      image: Service3_1,
      title: `${page.services.components.mobile.panelcladding.items.first.title}`,
      description: `${page.services.components.mobile.panelcladding.items.first.description}`,
    },
    {
      image: Service3_2,
      title: `${page.services.components.mobile.panelcladding.items.second.title}`,
      description: `${page.services.components.mobile.panelcladding.items.second.description}`,
    },
    {
      image: Service3_3,
      title: `${page.services.components.mobile.panelcladding.items.third.title}`,
      description: `${page.services.components.mobile.panelcladding.items.third.description}`,
    },
    {
      image: Service3_4,
      title: `${page.services.components.mobile.panelcladding.items.forth.title}`,
      description: `${page.services.components.mobile.panelcladding.items.forth.description}`,
    },
  ];

  return (
    <>
      <section className="relative w-full min-h-[100dvh] h-auto">
        <div className="mobile-serviceSectionPanelCladding-bg"></div>
        <div className="pt-[346px] pb-[160px] flex flex-col justify-start items-start min-h-[100dvh] h-auto px-10">
          <div>
            <h1
              className={`text-white text-[24px] font-[700] ${
                lang === "en" ? "kiona_bold" : "kiona_bold"
              }`}
            >
              PANEL CLADDING
            </h1>
            <p
              className={`text-white text-[14px] font-[700] mt-[12px] ${
                lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
              }`}
            >
              {page.services.components.mobile.panelcladding.title1}
            </p>
            <div className="mt-[40px] text-white text-[14px] font-[700]">
              <h1
                className={`text-[14px] font-[700] text-white ${
                  lang === "en" ? "kiona_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.components.mobile.panelcladding.title2}
              </h1>
              <p
                className={`text-[10px] font-[400] text-white mt-[8px] ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.components.mobile.panelcladding.description1}
              </p>
            </div>
            <div className="mt-8 text-white text-[14px] font-[700]">
              <h1
                className={`text-[14px] font-[700] text-white ${
                  lang === "en" ? "kiona_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.components.mobile.panelcladding.title3}
              </h1>
              <p
                className={`text-[10px] font-[400] text-white mt-[8px] ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.components.mobile.panelcladding.description2}
              </p>
            </div>
            <div className="mt-[60px]">
              <Link as={`/${lang}/services?type=MAIN`} href="">
                <div className="w-[25px] h-[25px] p-4 bg-white rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faAngleLeft} className="text-[20px]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-auto py-[40px] border-b-[3px] border-black">
        <Carousel
          infinite={true}
          showDots={false}
          responsive={responsive}
          autoPlay={false}
          transitionDuration={500}
          pauseOnHover={true}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {typeLists.map((item, idx) => (
            <div key={idx} className="m-auto w-[80%]">
              <div className="w-full h-full">
                <Image
                  className="w-full h-full object-cover"
                  src={item.image}
                  width={300}
                  height={300}
                  alt="image"
                />
              </div>
              <div className="mt-[12px]">
                <h1
                  className={`text-black text-[20px] font-[700] ${
                    lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
                  }`}
                >
                  {item.title}
                </h1>
                <p
                  className={`text-black text-[14px] font-[500] mt-[8px] ${
                    lang === "en" ? "ttfors" : "fcsubject_regular"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <Mobile_Footer page={page} lang={lang} />
    </>
  );
};

import Service4_1 from "@/../assets/images/services/sectionfourth/4_1.png";
import Service4_2 from "@/../assets/images/services/sectionfourth/4_2.png";
import Service4_3 from "@/../assets/images/services/sectionfourth/4_3.png";
import Service4_4 from "@/../assets/images/services/sectionfourth/4_4.png";

export const Mobile_Innovative_Adative: FC<MobileSectionFirstProps> = ({
  page,
  lang,
}) => {
  const typeLists = [
    {
      image: Service4_1,
      title: `${page.services.components.mobile.innovative.items.first.title}`,
      description: `${page.services.components.mobile.innovative.items.first.description}`,
    },
    {
      image: Service4_2,
      title: `${page.services.components.mobile.innovative.items.second.title}`,
      description: `${page.services.components.mobile.innovative.items.second.description}`,
    },
    {
      image: Service4_3,
      title: `${page.services.components.mobile.innovative.items.third.title}`,
      description: `${page.services.components.mobile.innovative.items.third.description}`,
    },
    {
      image: Service4_4,
      title: `${page.services.components.mobile.innovative.items.forth.title}`,
      description: `${page.services.components.mobile.innovative.items.forth.description}`,
    },
  ];

  return (
    <>
      <section className="relative w-full min-h-[100dvh] h-auto">
        <div className="mobile-serviceSectionInnovativeAdative-bg"></div>
        <div className="pt-[346px] pb-[160px] flex flex-col justify-start items-start min-h-[100dvh] h-auto px-10">
          <div>
            <h1
              className={`text-white text-[24px] font-[700] ${
                lang === "en" ? "kiona_bold" : "kiona_bold"
              }`}
            >
              INNOVATIVE & ADAPTIVE
            </h1>
            <p
              className={`text-white text-[14px] font-[700] mt-[12px] ${
                lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
              }`}
            >
              {page.services.components.mobile.innovative.title1}
            </p>
            <div className="mt-[40px] text-white text-[14px] font-[700]">
              <h1
                className={`text-[14px] font-[700] text-white ${
                  lang === "en" ? "kiona_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.components.mobile.innovative.title2}
              </h1>
              <p
                className={`text-[10px] font-[400] text-white mt-[8px] ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              >
                {page.services.components.mobile.innovative.description1}
              </p>
            </div>
            <div className="mt-8 text-white text-[14px] font-[700]">
              <h1
                className={`text-[14px] font-[700] text-white ${
                  lang === "en" ? "kiona_bold" : "fcsubject_bold"
                }`}
              >
                {page.services.components.mobile.innovative.title3}
              </h1>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    page.services.components.mobile.innovative.description2,
                }}
                className={`text-[10px] font-[400] text-white mt-[8px] ${
                  lang === "en" ? "ttfors" : "fcsubject_regular"
                }`}
              ></p>
            </div>
            <div className="mt-[60px]">
              <Link as={`/${lang}/services?type=MAIN`} href="">
                <div className="w-[25px] h-[25px] p-4 bg-white rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faAngleLeft} className="text-[20px]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-auto py-[40px] border-b-[3px] border-black">
        <Carousel
          infinite={true}
          showDots={false}
          responsive={responsive}
          autoPlay={false}
          transitionDuration={500}
          pauseOnHover={true}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {typeLists.map((item, idx) => (
            <div key={idx} className="m-auto w-[80%]">
              <div className="w-full h-full">
                <Image
                  className="w-full h-full object-cover"
                  src={item.image}
                  width={300}
                  height={300}
                  alt="image"
                />
              </div>
              <div className="mt-[12px]">
                <h1
                  className={`text-black text-[20px] font-[700] ${
                    lang === "en" ? "fcsubject_bold" : "fcsubject_bold"
                  }`}
                >
                  {item.title}
                </h1>
                <p
                  className={`text-black text-[14px] font-[500] mt-[8px] ${
                    lang === "en" ? "ttfors" : "fcsubject_regular"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <Mobile_Footer page={page} lang={lang} />
    </>
  );
};
