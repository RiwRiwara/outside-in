"use client";
import { FC, useRef, useCallback, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

// Logo
import OutsideLogo from "@/../assets/images/topbar/outside_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Locale } from "@/i18n.config";

const desktopMenuLists = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Service",
    route: "/services",
  },
  {
    title: "Our Team",
    route: "/ourteam",
  },
  {
    title: "Career",
    route: "/career",
  },
 /*  {
    title: "Projects",
    route: "#",
  }, */
  // {
  //   title: "Service",
  //   route: "/services",
  // },
  // {
  //   title: "Blog",
  //   route: "/blogs",
  // }
  {
    title: "Contact us",
    route: "/contact",
  },
];

const mobileMenuLists = [
  // {
  //   title: "Home",
  //   route: "/",
  // },
  {
    title: "Our Team",
    route: "/ourteam",
  },
  {
    title: "Service",
    route: "/services",
  },
  {
    title: "Blog",
    route: "/blogs",
  },
  {
    title: "Career",
    route: "/career",
  },
  {
    title: "Contact us",
    route: "/contact",
  },
];

const MenuLists: FC<topbarProps> = ({ lang }) => {
  return (
    <div className="flex justify-end items-center gap-24">
      {desktopMenuLists.map((item, idx) => (
        <Link as={`/${lang}/${item.route}`} href="" key={idx}>
          <li className="list-none text-white cursor-pointer" key={idx}>
            {item.title}
          </li>
        </Link>
      ))}
    </div>
  );
};

interface topbarProps {
  lang: Locale;
}

export const Topbar: FC<topbarProps> = ({ lang }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const handleNavigation = useCallback(() => {
    const currentScrollY = window.scrollY;
    setVisible(currentScrollY < lastScrollY || currentScrollY <= 0);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    [
      `${
        pathname.includes("/blogs/")
          ? "rgba(217, 217, 217, 0.1)"
          : "rgba(217, 217, 217, 0.1)"
      }`,
      "rgba(217, 217, 217, 0.1)",
    ]
  );

  const changeLang = () => {
    const switchLang = lang === "th" ? "en" : "th";
    const newPath = pathname.replace(`${lang}`, `${switchLang}`);
    router.push(newPath);
  };

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor }}
      className={`fixed z-[5] top-0 left-0 w-full flex justify-between items-center 2xl:py-2 xl:py-2 lg:py-2 2xl:px-10 xl:px-10 lg:px-10 px-6 py-6 duration-300 ${
        !visible
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
    >
      <div className="flex justify-start items-center gap-4 2xl:w-[10%] xl:w-[12%] lg:w-[14%] w-[130px]">
        <Link as={`/${lang}/`} href={""}>
          <Image
            src={OutsideLogo}
            className="w-full h-full object-cover"
            width={500}
            height={500}
            priority
            alt="logo"
          />
        </Link>
        <p
          onClick={() => changeLang()}
          className="text-white text-[15px] font-[600] select-none cursor-pointer"
        >
          {lang.toUpperCase()}
        </p>
      </div>
      <div className="2xl:block xl:block lg:block hidden">
        <MenuLists lang={lang} />
      </div>
      <div className="2xl:hidden xl:hidden lg:hidden">
        <svg
          className={`${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
          onClick={() => setMobileMenuOpen(mobileMenuOpen ? false : true)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M0 0H24V3H0V0ZM8 10.5H24V13.5H8V10.5ZM0 21H24V24H0V21Z"
            fill="white"
          />
        </svg>
        <div
          className={`absolute top-0 right-0 w-[80%] bg-black/40 h-screen duration-300 ${
            mobileMenuOpen
              ? "opacity-100 z-[2] pointer-events-auto"
              : "opacity-0 z-[-1] pointer-events-none"
          }`}
        >
          <svg
            className="absolute top-12 right-6"
            onClick={() => setMobileMenuOpen(mobileMenuOpen ? false : true)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M0 0H24V3H0V0ZM8 10.5H24V13.5H8V10.5ZM0 21H24V24H0V21Z"
              fill="white"
            />
          </svg>
          <div className="mt-28">
            {mobileMenuLists.map((item, idx) => (
              <Link
                href={`/${lang}${item.route}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                key={idx}
                className={`text-white text-[18px] pl-7 pr-16 py-3 font-[600] border-b-[2px] border-white flex justify-between items-center ${
                  lang === "en" ? "kiona_bold" : "kiona_bold"
                }`}
              >
                <p>{item.title.toUpperCase()}</p>
                <div>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-[25px]"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
