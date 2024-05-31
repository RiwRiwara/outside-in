import { FC } from "react";
import Image from "next/image";
import Slider from "react-slick";

import MobileImage1 from "@/../assets/images/home/background/sectionfirst/mobile/1.png";
import MobileImage2 from "@/../assets/images/home/background/sectionfirst/mobile/2.png";
import MobileImage3 from "@/../assets/images/home/background/sectionfirst/mobile/3.png";

import DesktopImage1 from "@/../assets/images/home/background/sectionfirst/desktop/1.png";
import DesktopImage2 from "@/../assets/images/home/background/sectionfirst/desktop/2.png";
import DesktopImage3 from "@/../assets/images/home/background/sectionfirst/desktop/3.png";

const Slideshow: FC = () => {
  const mobileImageLists = [MobileImage1, MobileImage2, MobileImage3];
  const desktopImageLists = [DesktopImage1, DesktopImage2, DesktopImage3];
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  return (
    <>
      <div className="2xl:block xl:block lg:block hidden">
        <Slider {...settings}>
          {desktopImageLists.map((item, idx) => (
            <div className="w-full h-screen" key={idx}>
              <Image
                src={item}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                draggable={false}
                alt="imageslideshow"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="2xl:hidden xl:hidden lg:hidden block">
        <Slider {...settings}>
          {mobileImageLists.map((item, idx) => (
            <div className="w-full h-screen" key={idx}>
              <Image
                src={item}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                draggable={false}
                alt="imageslideshow"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Slideshow;
