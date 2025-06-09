import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";
import { offerList } from "@/data/hero";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-40 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
                priority
                fetchPriority="high"
                loading="eager"
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">

              {offerList.map((item, index) => (
              <a
                href={item.url}
                title={`Penawaran Spesial Terbatas Sewa ${item.title}`}
                key={index}
                target="_blank"
                className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5"
              >
                <div className="flex items-center gap-3">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-8">
                      <span className="bg-blue-100 text-blue-800 text-xs uppercase font-bold px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-200">{item.header} </span>
                      <span className="heading uppercase font-bold text-4xl tracking-tight block text-black dark:text-white mt-2 leading-none">{item.title} </span>
                      <span className="block">{item.specification}</span>
                    </h2>
                    <div>
                      <p className="font-medium text-custom-sm leading-none">
                        {item.label}
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-bold text-4xl text-red">
                          {item.discount}%
                        </span>
                        <span className="font-medium text-custom-sm leading-none">
                          {item.discountText}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      priority
                      fetchPriority="high"
                      loading="eager"
                    />
                  </div>
                </div>
              </a>
            ))}

            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
