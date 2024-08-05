import { FC, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
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

  const ImageWithZoom = ({ src, alt }: { src: StaticImageData; alt: string }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsZoomed(entry.isIntersecting);
        },
        { threshold: 0.5 } // Adjust threshold as needed
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }, []);

    return (
      <div
        ref={imgRef}
        className={`w-full h-screen ${isZoomed ? "zoomed" : ""}`}
      >
        <Image
          src={src}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          draggable={false}
          alt={alt}
        />
      </div>
    );
  };

  return (
    <>
      <div className="2xl:block xl:block lg:block hidden">
        <Slider {...settings}>
          {desktopImageLists.map((item, idx) => (
            <ImageWithZoom key={idx} src={item} alt="imageslideshow" />
          ))}
        </Slider>
      </div>
      <div className="2xl:hidden xl:hidden lg:hidden block">
        <Slider {...settings}>
          {mobileImageLists.map((item, idx) => (
            <ImageWithZoom key={idx} src={item} alt="imageslideshow" />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Slideshow;
