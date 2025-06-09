"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { site } from "@/data/default";
import { heroList } from "@/data/hero";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      {heroList.map((item, index) => (
      <SwiperSlide>
        {" "}
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-4">
              <span className="block font-semibold text-5xl sm:text-heading-1 text-blue">
                {item.discount}%
              </span>
              <span
                  className="block text-dark text-sm sm:text-custom-1 sm:leading-[22px]"
                  dangerouslySetInnerHTML={{ __html: item.discountText }}
              />
            </div>

            <div className="font-bold text-5xl text-dark heading uppercase mb-3 tracking-tight" dangerouslySetInnerHTML={{ __html: item.title }} />

            {index === 0 ? (
              <h1 className="text-dark mb-3" dangerouslySetInnerHTML={{ __html: item.subtitle }} />
            ) : (
              <h2 className="text-dark mb-3" dangerouslySetInnerHTML={{ __html: item.subtitle }} />
            )}

            <p className="text-custom-sm" dangerouslySetInnerHTML={{ __html: item.description }} />

            <a
              href={item.button.url}
              title={item.button.title}
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-12"
            >
              {item.button.label}
            </a>
          </div>

          <div>
            <Image
              src={item.image.url}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL={item.image.blurUrl}
            />
          </div>
        </div>
      </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousal;
