import React from "react";
import Image from "next/image";
import {site} from "@/data/default";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between rounded-lg bg-[#F5F5F7] p-8 lg:py-17.5 xl:py-22.5 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              Khusus Bisnis, Sekolah dan Event
            </span>

            <h2 className="heading uppercase font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5 tracking-tight !leading-none">
              Sewa Lebih Murah! Diskon Hingga 30%
            </h2>

            <p>
              Ngapain beli alat mahal-mahal? Mendingan sewa aja!<br />Khusus untuk bisnis, event, atau sekolah, harga rental perangkat (laptop, Komputer PC, Printer, dll) bisa hemat sampai 30%.
            </p>

            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                `Hai ${site.name},\nsaya minta penawaran khusus bisnis sewa untuk sewa komputer/laptop.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Sewa Komputer Laptop untuk Bisnis, Sekolah, Event, dan Lainnya"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              Gaskeun!
            </a>

          </div>

          <Image
            src="/images/products/sewa-komputer-laptop.webp"
            alt="Sewa Komputer Laptop untuk Bisnis, Sekolah, Event, dan Lainnya"
            width={560}
            height={300}
            sizes="(max-width: 900px) 360px, 560px"
            className="flex w-auto h-auto mb-5 md:mb-0"
          />

        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="flex gap-4 flex-col md:flex-row items-center justify-between rounded-lg bg-[#DBF4F3] p-8 xl:p-10 sm:px-7.5">
            <Image
              src="/images/products/sewa-digital-signage.webp"
              alt="Penyewaan Digtal Signage"
              className="mb-5 md:mb-0"
              width={270}
              height={230}
              sizes="(max-width: 900px) 150px, 300px"
            />

            <div className="md:max-w-[300px] md:text-right">
              <span className="block text-lg text-dark mb-1.5">
                Interactive Media
              </span>

              <h2 className="heading uppercase font-bold text-3xl lg:text-heading-3 text-dark mb-2.5 tracking-tight !leading-none">
                Digital Signage
              </h2>

              <p className="text-custom-sm">
                Pameran, event, atau promosi brand? Sewa Digital Signage aja! Bisa dipakai untuk video, menu interaktif, sampai iklan real-time.
              </p>

              <a
              target="_blank"
              rel="noopener noreferrer"
                title="Harga Sewa Digital Signage"
                href="https://rtsindo.id/rental/tv-videotron"
                className="inline-flex font-medium text-custom-sm text-white bg-teal-700 py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-800 mt-5"
              >
                Sewa Signage
              </a>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="flex gap-4 flex-col md:flex-row items-center justify-between rounded-lg bg-[#FFECE1] p-8 xl:p-10 sm:px-7.5">
            <Image
              src="/images/products/sewa-mesin-fotokopi.webp"
              alt="promo img"
              className="mb-5 md:mb-0"
              width={270}
              height={230}
            />

            <div className="md:max-w-[300px] md:text-right">
              <span className="block text-lg text-dark mb-1.5">
                Produktivitas
              </span>

              <h2 className="heading uppercase font-bold text-3xl lg:text-heading-3 text-dark mb-2.5 tracking-tight !leading-none">
                MESIN <span className="text-orange-700">PHOTO</span>COPY
              </h2>

              <p className="max-w-[300px] text-custom-sm">
                Cetak cepat buat sekolah, kantor, event, atau proyek besar? Sewa mesin fotokopi aja! Cocok buat dokumen harian, sampai laporan tebal.
              </p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Harga Sewa Mesin Fotokopi"
                href="https://rtsindo.id/rental/photocopy"
                className="inline-flex font-medium text-custom-sm text-white bg-orange-700 py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-800 mt-7.5"
              >
                Penawaran
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
