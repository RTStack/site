"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Berapa lama durasi rental laptop?",
    answer:
      "Durasi rental minimum adalah <strong>1 hari</strong> dan maksimal bisa disesuaikan sesuai kebutuhan kamu.",
  },
  {
    question: "Apa bisa sewa untuk keperluan pribadi/ personal?",
    answer:
      "Tentu saja! Kami melayani sewa laptop untuk keperluan pribadi maupun bisnis.",
  },
  {
    question: "Berapa banyak jumlah minimum & maksimum unit yang bisa disewa?",
    answer: "Jumlah minimum yang bisa disewa adalah <strong>1 unit</strong> dan <strong>maksimum sesuai ketersediaan unit</strong>.",
  },
  {
    question: "Apakah ada biaya pengiriman?",
    answer: `
      Biaya pengiriman tergantung lokasi kamu. <br />
      Tapi kalau masih dalam area coverage kita, pengiriman <strong>GRATIS</strong>. <br />
      Kalau di luar area, akan ada biaya tambahan yang kami informasikan sebelum transaksi.
    `,
  },
  {
    question: "Laptop yang disewa garansi apa?",
    answer: `
      Semua laptop kami dilengkapi dengan garansi teknis selama masa rental.<br />
      Jika ada unit yang rusak, kami akan menggantinya dengan unit baru tanpa ribet.<br />
      Tim kami siap membantu dengan pelayanan ramah dan teknisi berpengalaman.<br />
      Kami menyediakan banyak unit yang selalu terawat dengan baik.<br />
      Selain itu, pengiriman dilakukan tepat waktu sesuai jadwal.<br />
      Tinggal kontak kami, semua beres!
    `,
  },

  {
    question: "Bagaimana cara booking rental laptop?",
    answer: `Kamu bisa langsung <strong>kontak kami via WhatsApp</strong> atau isi <strong>form pemesanan rental laptop dan perangkat IT</strong> di website rtsindo.com atau <a class="text-blue-500 underline" href="https://rtsindo.id" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi rtsindo.id untuk pemesanan rental laptop dan perangkat lainnya">rtsindo.id</a> untuk memulai proses booking dengan mudah dan cepat.
    `,
  },
  {
    question: "Apa saja syarat dan ketentuan yang harus dipenuhi?",
    answer: `
      <strong>Untuk menyewa laptop, berikut syarat dan ketentuan yang harus dipenuhi:</strong><br/>
      <ol class="list-decimal list-inside space-y-1 mt-2">
        <li>Foto identitas resmi berupa KTP.</li>
        <li>Foto NPWP perusahaan atau instansi terkait.</li>
        <li>Surat Pesanan (PO) atau Surat Permintaan Sewa dari perusahaan/instansi.</li>
        <li>Pengiriman unit dilakukan ke alamat yang tertera pada NPWP perusahaan/instansi.</li>
        <li>Pembayaran sewa dilakukan saat unit diterima oleh pelanggan.</li>
        <li>Tim kami berhak menolak pesanan setelah melakukan pertimbangan yang matang.</li>
      </ol>
    `,
  },
  {
    question: "Apa saja jenis laptop dan unit lain yang tersedia?",
    answer: `
      Kami menyediakan berbagai jenis perangkat laptop, antara lain:<br />
      <ul class="list-disc list-inside ml-4">
        <li>Laptop Intel Core i3</li>
        <li>Laptop Intel Core i5</li>
        <li>Laptop Intel Core i7</li>
        <li>MacBook</li>
        <li>Laptop Gaming</li>
        <li>Tablet</li>
        <li>Hybrid</li>
      </ul>
    `,
  }

];

export default function FaqLaptop() {
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
              Seputar Rental
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-6 text-dark">
              Pertanyaan Umum tentang Rental Laptop
            </h2>
            <p className="text-custom-sm">
               Temukan jawaban atas pertanyaan umum seputar rental laptop, mulai dari cara sewa, durasi, harga, hingga garansi, supaya kamu makin yakin sebelum rental.
            </p>
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
                <span className="text-xl select-none">{openIndex === i ? "−" : "+"}</span>
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
