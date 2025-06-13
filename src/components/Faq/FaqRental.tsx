"use client";

import React, { useState } from "react";
import Image from "next/image";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  categoryName: string;
  areaName?: string; // Optional
};

const getFaqs = (category: string, area?: string): FaqItem[] => {
  const categoryLC = category.toLowerCase();
  const areaLC = area?.toLowerCase();

  const coverageHTML =
  !area || area.toLowerCase() === "terdekat"
    ? `<a href="#coverage" title="Area Cakupan" class="text-blue-600 underline hover:text-blue-800 transition-colors">terdekat</a>`
    : area;

  const inject = (text: string) =>
  text
    .replace(/\{coverage\}/gi, coverageHTML)
    .replace(/\{kategori\}/gi, categoryLC);

  return [
    {
      question: `Berapa lama durasi rental {kategori}?`,
      answer: `Durasi sewa minimum adalah <strong>1 hari</strong> dan maksimal bisa disesuaikan sesuai kebutuhan kamu.`,
    },
    {
        question: `Berapa harga sewa {kategori}?`,
        answer: `
            Harga sewa {kategori} bervariasi tergantung <strong>spesifikasi</strong>, <strong>jumlah unit</strong>, <strong>durasi sewa</strong>, dan <strong>promo sewa {kategori}</strong>.<br />
            Hubungi kami untuk dapatkan penawaran terbaik sesuai kebutuhan kamu.
        `,
    },
    {
      question: `Apa bisa sewa {kategori} untuk pribadi/ personal?`,
      answer: `Tentu bisa! Kami melayani sewa {kategori} untuk keperluan pribadi maupun bisnis.`,
    },
    {
      question: `Apakah ada biaya pengiriman ke {coverage}?`,
      answer: `Biaya pengiriman tergantung lokasi kamu.<br/>Kalau masih dalam area {coverage}, <strong>pengiriman GRATIS</strong>.<br/>
      Kalau di luar area, akan ada biaya tambahan yang kami informasikan sebelum transaksi.`,
    },
    {
      question: `Bagaimana cara booking sewa {kategori}?`,
      answer: `Kamu bisa langsung <strong>kontak kami via WhatsApp</strong> atau isi <strong>form pemesanan rental laptop dan perangkat IT</strong> di website rtsindo.com atau <a class="text-blue-500 underline" href="https://rtsindo.id" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi rtsindo.id untuk pemesanan rental laptop dan perangkat lainnya">rtsindo.id</a> untuk memulai proses booking dengan mudah dan cepat`,
    },
    {
    question: "{kategori} yang disewa garansi apa?",
        answer: `
        Semua {kategori} kami dilengkapi dengan garansi teknis selama masa rental.<br />
        Jika ada unit yang rusak, kami akan menggantinya dengan unit baru tanpa ribet atau langsung kami perbaiki.<br />
        Tim kami siap membantu dengan pelayanan ramah dan teknisi berpengalaman.<br />
        Kami menyediakan banyak unit yang selalu terawat dengan baik.<br />
        Selain itu, pengiriman dilakukan tepat waktu sesuai jadwal.<br />
        Tinggal kontak kami, semua beres!
        `,
    },
    {
      question: `Apa saja syarat sewa {kategori}?`,
      answer: `
        <ol class="list-decimal list-inside space-y-1 mt-2">
          <li>Foto identitas (KTP).</li>
          <li>NPWP perusahaan/instansi.</li>
          <li>Surat Pesanan (PO) atau surat permintaan resmi.</li>
          <li>Pembayaran saat barang diterima.</li>
        </ol>
      `,
    },
  ].map(({ question, answer }) => ({
    question: inject(question),
    answer: inject(answer),
  }));
};

export default function Faq({ categoryName, areaName }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = getFaqs(categoryName, areaName);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="globalFaq" className="overflow-hidden mt-10">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 mb-20">
        <div className="mb-10">
          <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
            <Image src="/images/icons/icon-07.svg" alt="icon" width={17} height={17} />
            Seputar Rental {categoryName}
          </span>
          <h2 className="font-semibold text-xl xl:text-heading-6 text-dark">
            Pertanyaan Umum seputar Rental {categoryName}
            {areaName && ` di ${areaName}`}
          </h2>
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
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleIndex(i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium" dangerouslySetInnerHTML={{ __html: faq.question }} />
                <span className="text-xl select-none">{openIndex === i ? "−" : "+"}</span>
              </div>
              {openIndex === i && (
                <p className="mt-2 text-custom-sm text-gray-700" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
