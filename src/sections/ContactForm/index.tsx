"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Locale } from "@/i18n.config";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

import OutsideLogoBlack from "@/../assets/images/home/background/sectionfifth/outside_logo_black.png";
import facebookIcon from "@/../assets/images/home/background/sectionfifth/facebookicon.png";
import lineIcon from "@/../assets/images/home/background/sectionfifth/lineicon.png";
import mailIcon from "@/../assets/images/home/background/sectionfifth/mailicon.png";

interface DesktopSectionFirstProps {
  page: any;
  lang: Locale;
}

export const ContactForm: FC<DesktopSectionFirstProps> = ({ page, lang }) => {
  const { register, watch, setValue, handleSubmit } = useForm();
  const router = useRouter();
  const [getTopic, setTopic] = useState([
    {
      title: "Design",
      value: "Design",
      check: false,
    },
    {
      title: "Renovation",
      value: "Renovation",
      check: false,
    },
    {
      title: "Commercial Remodeling",
      value: "Commercial_Remodeling",
      check: false,
    },
    {
      title: "Construction",
      value: "Construction",
      check: false,
    },
    {
      title: "Jobs",
      value: "Jobs",
      check: false,
    },
    {
      title: "Others",
      value: "Others",
      check: false,
    },
  ]);

  const handleCheckboxChange = (idx: number) => {
    const updatedCheckboxes = [...getTopic];
    updatedCheckboxes[idx].check = !updatedCheckboxes[idx].check;
    setTopic(updatedCheckboxes);
  };

  const onSubmitForm = async (data: any) => {
    const selectedTopics = getTopic.filter((topic) => topic.check === true);
    const selectedTopicTitles = selectedTopics.map((topic) => topic.title);
    const payload = {
      ...data,
      topics: selectedTopicTitles,
    };

    toast.loading("กำลังส่งคำขอ...");
    try {
      await axios.post("/api/form_contact", payload);
      toast.dismiss();
      toast.success("ส่งอีเมลติดต่อสำเร็จ, กรุณารอการตอบกลับ");
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดไม่สามารถดำเนินการได้");
    }
  };

  return (
    <>
      <section className="bg-[#383838] text-white relative 2xl:w-[70%] xl:w-[70%] lg:w-[90%] md:w-[70%] sm:w-[70%] w-[80%] m-auto min-h-screen h-auto pb-0 2xl:pt-0 xl:pt-0 lg:pt-0 pt-10 flex justify-center items-center flex-wrap gap-y-[5em] gap-x-[2em]">
        <div className="2xl:w-[45%] xl:w-[45%] lg:w-[45%] w-[100%]">
          <div className="2xl:w-[40%] xl:w-[45%] lg:w-[50%] w-[40%]">
            <Image
              src={OutsideLogoBlack}
              className="w-full h-full object-cover"
              width={500}
              height={500}
              priority
              alt="logoblack"
            />
          </div>
          <div className="2xl:mt-[6em] xl:mt-[6em] lg:mt-[6em] mt-5">
            <p
              dangerouslySetInnerHTML={{
                __html: page.contactfrom.section1.desktop.description,
              }}
              className={`2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[16px] font-[400] ${
                lang === "en" ? "fcsubject_regular" : "fcsubject_regular"
              }`}
            ></p>
          </div>
          <div className="mt-[3em]">
            <p
              className={`2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[16px] font-[400] ${
                lang === "en" ? "fcsubject_regular" : "fcsubject_regular"
              }`}
            >
              {page.contactfrom.section1.desktop.description2}
            </p>
          </div>
          <div className="mt-[2em]">
            <div className="flex justify-start items-center gap-5">
              <div>
                <FontAwesomeIcon icon={faPhone} className="text-[25px]" />
              </div>
              <p className="text-[24px] font-[600]">(66+)83-221-1107</p>
            </div>
          </div>
          <div className="mt-[2em]">
            <p
              className={`text-[20px] font-[600] ${
                lang === "en" ? "ttfors" : "ttfors"
              }`}
            >
              connect with us{" "}
            </p>
          </div>
          <div className="mt-[2em]">
            <div className="flex justify-start items-center gap-6">
              <div className="w-[12%]">
                <a
                  href="https://www.facebook.com/outsideincompany"
                  target="_blank"
                >
                  <Image
                    className="w-full h-full object-cover bg-white"
                    src={facebookIcon}
                    width={50}
                    height={50}
                    priority
                    alt="facebook"
                  />
                </a>
              </div>
              <div className="w-[12%]">
                <a href="https://lin.ee/AoyafhD" target="_blank">
                  <Image
                    className="w-full h-full object-cover"
                    src={lineIcon}
                    width={50}
                    height={50}
                    priority
                    alt="line"
                  />
                </a>
              </div>
              <div className="w-[12%]">
                <Image
                  onClick={() => {
                    router.push("/contact");
                  }}
                  className="w-full h-full object-cover"
                  src={mailIcon}
                  width={50}
                  height={50}
                  priority
                  alt="mail"
                />
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] w-[100%]"
        >
          <div>
            <h1
              className={`text-[20px] font-[600] ${
                lang === "en" ? "ttfors" : "ttfors"
              } `}
            >
              Please Provide Your Information 
            </h1>
            <div className="mt-7">
              <input
                {...register("name", { required: "โปรดระบุข้อมูล" })}
                type="text"
                placeholder="Your name"
                className="bg-[#383838] rounded-lg border-[2px] border-[#B7B7B7] py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mt-7">
              <input
                {...register("email", { required: "โปรดระบุข้อมูล" })}
                type="email"
                placeholder="Email"
                className="bg-[#383838] rounded-lg border-[2px] border-[#B7B7B7] py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mt-7">
              <input
                {...register("phone", { required: "โปรดระบุข้อมูล" })}
                type="tel"
                placeholder="Phone"
                className="bg-[#383838] rounded-lg border-[2px] border-[#B7B7B7] py-2 px-3 w-full"
                required
              />
            </div>
          </div>
          <div className="mt-10">
            <h2
              className={`text-[18px] font-[400]${
                lang === "en" ? "ttfors" : "ttfors"
              } `}
            >
              Topic <span className="text-red-500">*</span>
            </h2>
            <div>
              {getTopic.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCheckboxChange(idx)}
                  className="flex justify-start items-center gap-4 select-none my-1 w-fit py-1 cursor-pointer "
                >
                  <input
                    type="checkbox"
                    style={{ width: "20px", height: "20px" }}
                    
                    checked={getTopic[idx].check}
                    onChange={(e) => {
                      return;
                    }}
                  />
                  <p className="text-white text-[16px] font-[400] select- cursor-pointer">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <button
              type="submit"
              className="bg-[#4ABB90] text-white py-4 px-4 w-[50%] text-[20px]"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <Link as={`/${lang}/policy`} href={""}>
        <div className="bg-[#383838]  text-white w-full 2xl:text-right xl:text-right lg:text-right md:text-right sm:text-right text-center p-5 mt-10 cursor-pointer underline underline-offset-2">
          <p className="bg-[#383838]  text-white text-[16px]">
            {page.policy.label}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ContactForm;
