"use client";

import React, { useState } from "react";
import Image from "next/image";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
};

export default function Faq({
  faqs,
  title = "Pertanyaan Umum",
  subtitle = "Temukan jawaban atas pertanyaan umum seputar rental.",
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="overflow-hidden">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 mb-20">
        {/* <!-- section title --> */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
              <Image
                src="/images/icons/icon-07.svg"
                alt="icon"
                width={17}
                height={17}
              />
              Seputar Layanan
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-6 text-dark">
              {title}
            </h2>
            <p className="text-custom-sm">{subtitle}</p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-md p-4 cursor-pointer bg-white shadow hover:shadow-md transition"
              onClick={() => toggleIndex(i)}
              aria-expanded={openIndex === i}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleIndex(i);
              }}
            >
              <div className="flex justify-between items-center">
                <h3
                  className="text-lg font-medium"
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                />
                <span className="text-xl select-none">
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>
              {openIndex === i && (
                <p
                  className="mt-2 text-custom-sm text-gray-700"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
