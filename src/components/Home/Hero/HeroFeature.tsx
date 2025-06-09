import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Free Ongkir",
    description: "Untuk Area Tercover",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Penggantian Instan",
    description: "Rusak? Kami Ganti Baru",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "100% Pembayaran Aman",
    description: "Garansi Pembayaran Aman",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "24/7 Support",
    description: "Dimanapun & Kapanpun",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <div style={{ position: 'relative', width: 40, height: 40 }}>
              <Image
                src={item.img}
                alt="icons"
                width={40}
                height={41}
                style={{ height: "auto" }}
              />
            </div>
            <div>
              <h3 className="heading font-bold text-lg text-dark">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
