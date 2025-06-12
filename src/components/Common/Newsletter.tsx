"use client"
import React, { useState } from "react";
import Image from "next/image";
import { site } from "@/data/default";

const Newsletter = ({ className = "" }: { className?: string }) => {
  const [fullName, setFullName] = useState("");

  const handleContactClick = () => {
    const message = encodeURIComponent(`Halo ${site.name},\nsaya ${fullName}.\nSaya tertarik dengan layanan rentalnya.`);
    const whatsappLink = `https://wa.me/${site.whatsapp}?text=${message}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <section id="cta" className={`overflow-hidden ${className}`}>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative z-1 overflow-hidden rounded-xl">
          {/* <!-- bg shapes --> */}
          <Image
            src="/images/shapes/newsletter-bg.jpg"
            alt="background illustration"
            className="absolute -z-1 w-full h-full left-0 top-0 rounded-xl"
            width={1170}
            height={200}
          />
          <div className="absolute -z-1 max-w-[523px] max-h-[243px] w-full h-full right-0 top-0 bg-gradient-1"></div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-4 sm:px-7.5 xl:pl-12.5 xl:pr-14 py-11">
            <div className="max-w-[491px] w-full">
              <h2 className="max-w-[399px] text-white font-bold text-lg sm:text-xl xl:text-heading-4 mb-3">
                Rental khusus dan penawaran menarik?
              </h2>
              <p className="text-white">
                Hubungi kami untuk mendapatkan penawaran menarik dan layanan rental custom sesuai kebutuhan Anda.
              </p>
            </div>

            <div className="max-w-[600px] w-full">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Masukkan nama lengkap"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-gray-1 border border-gray-3 outline-none rounded-md placeholder:text-dark-4 py-3 px-5"
                  />
                  <button
                    onClick={handleContactClick}
                    title="Hubungi kami untuk penawaran menarik"
                    type="submit"
                    className="w-auto inline-flex gap-2 items-center justify-center py-3 px-7 text-white bg-blue-900 font-medium rounded-md ease-out duration-200 hover:bg-blue-dark"
                  >
                    Kirim
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="fill-current" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
