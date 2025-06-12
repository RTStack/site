"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "../Common/Breadcrumb";

import ProductGridItem from "../Shop/ProductGridItem";
import ProductListItem from "../Shop/ProductListItem";
import CustomSelect from "../ShopWithSidebar/CustomSelect";
import Newsletter from "@/components/Common/Newsletter";

import shopData from "../Shop/shopData";
import area from "@/data/area";

import { BsGrid, BsViewStacked } from "react-icons/bs";

const CategoryDetails = ({
  category,
}: {
  category: { id: number; name: string; title: string };
}) => {
  const [productStyle, setProductStyle] = useState("grid");
  const [sortOption, setSortOption] = useState("0");

  const options = [
    { label: "Produk Terbaru", value: "0" },
    { label: "Produk Terlaris", value: "1" },
    { label: "Produk Lama", value: "2" },
  ];

  const filteredProducts = shopData
    .filter((item) => item.categoryId === category.id)
    .sort((a, b) => {
      switch (sortOption) {
        case "0":
          return (
            new Date(b.priority).getTime() - new Date(a.priority).getTime()
          );
        case "1":
          return (b.reviews || 0) - (a.reviews || 0);
        case "2":
          return (
            new Date(a.priority).getTime() - new Date(b.priority).getTime()
          );
        default:
          return 0;
      }
    });

  const [stickyMenu, setStickyMenu] = useState(false);

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <>
      <Breadcrumb
        title={category.name}
        subtitle={category.title}
        pages={[
          {
            title: `Sewa ${category.name}`,
            slug: category.url.replaceAll("/", ""),
          },
        ]}
      />
      {/* One Page Navigation */}
      <nav
        className={`sticky top-[64px] z-10 bg-white py-3 transition-all border-t border-gray-3 ease-in-out duration-300 ${
          stickyMenu && "shadow pt-10"
        }`}
      >
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 flex justify-center gap-4 text-sm font-medium text-gray-700">
          <a
            href="#produk"
            title={`List Produk ${category.name} Sewaan`}
            className="hover:text-blue-600 transition"
          >
            Produk
          </a>
          <a
            href="#cta"
            title={`Harga Sewa ${category.name}`}
            className="hover:text-blue-600 transition"
          >
            Penawaran
          </a>
          <a
            href="#coverage"
            title={`Lokasi Penyewaan ${category.name}`}
            className="hover:text-blue-600 transition"
          >
            Cakupan
          </a>
        </div>
      </nav>
      <section
        id="produk"
        className="overflow-hidden relative pb-20 pt-5 lg:pt-20 bg-[#f3f4f6]"
      >
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-7.5">
            {/* // <!-- Content Start --> */}
            <div className="w-full">
              <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
                <div className="flex items-center justify-between">
                  {/* <!-- top bar left --> */}
                  <div className="flex flex-wrap items-center gap-4">
                    <CustomSelect
                      options={options}
                      value={sortOption}
                      onChange={setSortOption}
                    />

                    <p>
                      Menampilkan{" "}
                      <span className="text-dark">
                        {filteredProducts.length}
                      </span>{" "}
                      Produk
                    </p>
                  </div>

                  {/* <!-- top bar right --> */}
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setProductStyle("grid")}
                      aria-label="button for product grid tab"
                      className={`${
                        productStyle === "grid"
                          ? "bg-blue border-blue text-white"
                          : "text-dark bg-gray-1 border-gray-3"
                      } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-blue hover:border-blue hover:text-white`}
                    >
                      <BsGrid />
                    </button>

                    <button
                      onClick={() => setProductStyle("list")}
                      aria-label="button for product list tab"
                      className={`${
                        productStyle === "list"
                          ? "bg-blue border-blue text-white"
                          : "text-dark bg-gray-1 border-gray-3"
                      } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-blue hover:border-blue hover:text-white`}
                    >
                      <BsViewStacked />
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Products Grid Tab Content Start --> */}
              <div
                className={`${
                  productStyle === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7.5 gap-y-9"
                    : "flex flex-col gap-7.5"
                }`}
              >
                {filteredProducts.map((item, key) =>
                  productStyle === "grid" ? (
                    <ProductGridItem item={item} key={key} />
                  ) : (
                    <ProductListItem item={item} key={key} />
                  )
                )}
              </div>
              {/* <!-- Products Grid Tab Content End --> */}
            </div>
            {/* // <!-- Content End --> */}
          </div>
        </div>
      </section>
      <Newsletter className="py-17.5" />
      {/* Daftar Kota di Jabodetabek */}
      <div id="coverage" className="py-20 text-center bg-[#f9fafb]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Dimana Bisa Sewa {category.name}? Berikut Daftar Kota Layanannya
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {area.map((kota) => {
              const realSLug = category.url.replaceAll("/", "");
              const name = category.name;
              const slug = `${realSLug}-${kota
                .toLowerCase()
                .replace(/\s+/g, "-")}`;
              return (
                <a
                  key={slug}
                  href={`/${slug}`}
                  title={`Sewa ${name} ${kota.toLowerCase()}`}
                  className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm hover:bg-blue-200 transition"
                >
                  {kota}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
