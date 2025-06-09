"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Newsletter from "../Common/Newsletter";
import Tooltip from "../Common/Tooltip";
import ExpandIcon from "../Common/ExpandIcon";
import CheckboxIcon from "../Common/CheckboxIcon";
import Image from "next/image";
import RecentlyViewdItems from "./RecentlyViewd";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { useDispatch } from "react-redux";
import { updateproductDetails } from "@/redux/features/product-details";
import { StarRating } from "@/components/Common/StarRating";
import { BsCartPlus } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ProductDetails = ({ product }) => {
  const { openPreviewModal } = usePreviewSlider();
  const [previewImg, setPreviewImg] = useState(0);
  const [selectedSet, setSelectedSet] = useState("basic");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("tabOne");
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleAccessoryChange = (key, itemKey) => {
    setSelectedOptions((prev) => {
      const currentSelected = prev[key] || [];
      if (currentSelected.includes(itemKey)) {
        return { ...prev, [key]: currentSelected.filter((k) => k !== itemKey) };
      } else {
        return { ...prev, [key]: [...currentSelected, itemKey] };
      }
    });
  };

  const tabs = [
    {
      id: "tabOne",
      title: "Deskripsi",
    },
    {
      id: "tabTwo",
      title: "Informasi",
    },
    {
      id: "tabThree",
      title: "Lainnya",
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      dispatch(updateproductDetails(product));
    }
  }, [dispatch, product]);

  // Handler untuk membuka modal preview gambar
  const handlePreviewSlider = () => {
    openPreviewModal(product?.imgs?.previews || [], previewImg);
  };

  // Data klien yang bisa dipilih user
  const clientLabels = {
    company: "Perusahaan",
    startup: "UMKM",
    event_organizer: "Event Organizer",
    government: "Pemerintah",
    school: "Sekolah",
    professional: "Profesional",
    individual: "Individu",
  };

  // Handler untuk memilih opsi (CPU, RAM, dll)
  const handleOptionChange = (key, value) => {
    setSelectedOptions((prev) => ({ ...prev, [key]: value }));
  };

  // Jika tidak ada produk, tampilkan pesan error
  if (!product) return <p>Produk tidak ditemukan.</p>;

  return (
    <>
      <Breadcrumb
        title={`Sewa ${product.title}`}
        pages={[
          { title: "rental", slug: "/rental" },
          { title: product.title, slug: `/rental/${product.slug}` },
        ]}
      />

      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28">
        <div className="max-w-[1170px] w-full mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
            {/* Preview dan thumbnail gambar */}
            <div className="lg:max-w-[570px] w-full">
              <div className="lg:min-h-[512px] rounded-lg shadow-1 bg-gray-2 p-4 sm:p-7.5 relative flex items-center justify-center">
                <div>
                  <button
                    onClick={handlePreviewSlider}
                    aria-label="button for zoom"
                    className="gallery__Image w-11 h-11 rounded-[5px] bg-gray-1 shadow-1 flex items-center justify-center ease-out duration-200 text-dark hover:text-blue absolute top-4 lg:top-6 right-4 lg:right-6 z-50"
                  >
                    <ExpandIcon />
                  </button>

                  <Image
                    src={product.imgs?.previews[previewImg]}
                    alt="product-image"
                    title={product.title}
                    width={400}
                    height={400}
                    priority
                    fetchPriority="high"
                    loading="eager"
                  />
                </div>
              </div>

              {/* ?  &apos;border-blue &apos; :  &apos;border-transparent&apos; */}
              <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-6">
                {product.imgs?.thumbnails.map((item, key) => (
                  <button
                    aria-label="button thumbnail"
                    onClick={() => setPreviewImg(key)}
                    key={key}
                    className={`flex items-center justify-center w-15 sm:w-25 h-15 sm:h-25 overflow-hidden rounded-lg bg-gray-2 shadow-1 ease-out duration-200 border-2 hover:border-blue ${
                      key === previewImg ? "border-blue" : "border-transparent"
                    }`}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={item}
                      alt="thumbnail"
                      title={product.title}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Detail produk */}
            <div className="max-w-[539px] w-full">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-xl sm:text-2xl xl:text-custom-3 text-dark">
                  {product.title}
                </h2>

                <Tooltip text={product.promoDesc}>
                  <div className="inline-flex font-medium text-custom-sm text-white bg-blue rounded py-0.5 px-2.5">
                    {product.promo}
                  </div>
                </Tooltip>
              </div>
              <p className="mb-4.5">{product.spec}</p>

              <div className="flex flex-wrap items-center justify-between gap-5.5 mb-4.5">
                <div className="flex items-center gap-2.5">
                  {/* <!-- stars --> */}
                  <div className="flex items-center gap-1">
                    <StarRating rating={product.rating} size={16} />
                  </div>

                  <span> ({product.reviews} reviews) </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <IoMdCheckmarkCircleOutline className="fill-[#22AD5C] w-5 h-5" />
                  <span className="text-green-700"> Ready Stock </span>
                </div>
              </div>

              <h3 className="font-medium text-custom-1 mb-4.5">
                <span className="text-dark">
                  Harga: <strong>{product.price ?? "Call"} </strong>
                </span>
                {product.discountedPrice && (
                  <span className="line-through text-gray-500">
                    Rp. {product.discountedPrice}
                  </span>
                )}
              </h3>

              {product.freeDelivery && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <IoMdCheckmarkCircleOutline className="fill-[#3C50E0] w-5 h-5" />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: product.freeDeliveryDesc,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Form pilihan */}
              <form onSubmit={(e) => e.preventDefault()} className="mt-6">
                <div className="py-6 border-y border-gray-3 mb-6">
                  {/* Klien */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="min-w-[65px]">
                      <h4 className="font-medium text-dark">Klien:</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {Object.entries(clientLabels).map(([key, label]) => (
                        <label key={key} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="client"
                            value={key}
                            checked={selectedClient === key}
                            onChange={() => setSelectedClient(key)}
                            className="sr-only"
                          />
                          <div
                            className={`w-4 h-4 border rounded flex items-center justify-center ${
                              selectedClient === key
                                ? "bg-blue border-blue"
                                : "border-gray-400"
                            }`}
                          >
                            {selectedClient === key && (
                              <CheckboxIcon className="fill-white" />
                            )}
                          </div>
                          <span>{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Set Pilihan */}
                  <div className="flex items-center gap-4">
                    <div className="min-w-[65px]">
                      <h4 className="font-medium text-dark">Spek:</h4>
                    </div>
                    <div className="flex gap-3">
                      {[
                        { id: "basic", title: "Basic" },
                        { id: "custom", title: "Custom" },
                      ].map(({ id, title }) => (
                        <label key={id} className="cursor-pointer">
                          <input
                            type="radio"
                            name="set"
                            value={id}
                            checked={selectedSet === id}
                            onChange={() => setSelectedSet(id)}
                            className="sr-only"
                          />
                          <div
                            className={`px-4 py-1 border rounded ${
                              selectedSet === id
                                ? "bg-blue-700 text-white border-blue-700"
                                : "border-gray-400"
                            }`}
                          >
                            {title}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Opsi Kustom jika dipilih */}
                {selectedSet === "custom" &&
                  (() => {
                    const optionsEntries = Object.entries(
                      product.options || {}
                    );
                    const accessoriesEntry = optionsEntries.find(
                      ([key]) => key === "other"
                    );
                    const otherOptions = optionsEntries.filter(
                      ([key]) => key !== "other"
                    );

                    return (
                      <>
                        {/* Render opsi selain accessories dengan radio */}
                        {otherOptions.map(([key, items]) =>
                          Array.isArray(items) && items.length > 0 ? (
                            <div
                              key={key}
                              className="flex items-center gap-4 mb-4"
                            >
                              <div className="min-w-[80px]">
                                <h4 className="font-medium text-dark">
                                  {key
                                    .toLowerCase()
                                    .split("_")
                                    .map(
                                      (word) =>
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                                    )
                                    .join(" ")}
                                </h4>
                              </div>
                              <span className="">:</span>
                              <div className="flex gap-3 flex-wrap">
                                {items.map((item) => (
                                  <label
                                    key={item.key}
                                    className="flex items-center gap-2 cursor-pointer"
                                  >
                                    <input
                                      type="radio"
                                      name={key}
                                      value={item.key}
                                      checked={
                                        selectedOptions[key] === item.key
                                      }
                                      onChange={() =>
                                        handleOptionChange(key, item.key)
                                      }
                                      className="sr-only"
                                    />
                                    <div
                                      className={`w-4 h-4 border rounded flex items-center justify-center ${
                                        selectedOptions[key] === item.key
                                          ? "bg-blue border-blue"
                                          : "border-gray-400"
                                      }`}
                                    >
                                      <span
                                        className={
                                          selectedOptions[key] === item.key
                                            ? "opacity-100"
                                            : "opacity-0"
                                        }
                                      >
                                        <CheckboxIcon className="fill-[#0074dd]" />
                                      </span>
                                    </div>
                                    <span>{item.value}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          ) : null
                        )}

                        {/* Render accessories dengan checkbox */}
                        {accessoriesEntry && (
                          <div
                            key={accessoriesEntry[0]}
                            className="flex items-center gap-4"
                          >
                            <div className="min-w-[80px]">
                              <h4 className="font-medium text-dark">
                                {accessoriesEntry[0]
                                  .toLowerCase()
                                  .split("_")
                                  .map(
                                    (word) =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join(" ")}
                              </h4>
                            </div>
                            <span className="">:</span>
                            <div className="flex gap-3 flex-wrap">
                              {accessoriesEntry[1].map((item) => (
                                <label
                                  key={item.key}
                                  className="flex items-center gap-2 cursor-pointer"
                                >
                                  <input
                                    type="checkbox"
                                    name={`${accessoriesEntry[0]}[]`}
                                    value={item.key}
                                    checked={
                                      selectedOptions[
                                        accessoriesEntry[0]
                                      ]?.includes(item.key) || false
                                    }
                                    onChange={() =>
                                      handleAccessoryChange(
                                        accessoriesEntry[0],
                                        item.key
                                      )
                                    }
                                    className="sr-only"
                                  />
                                  <div
                                    className={`w-4 h-4 border rounded flex items-center justify-center ${
                                      selectedOptions[
                                        accessoriesEntry[0]
                                      ]?.includes(item.key)
                                        ? "bg-blue border-blue"
                                        : "border-gray-400"
                                    }`}
                                  >
                                    <span
                                      className={
                                        selectedOptions[
                                          accessoriesEntry[0]
                                        ]?.includes(item.key)
                                          ? "opacity-100"
                                          : "opacity-0"
                                      }
                                    >
                                      <CheckboxIcon className="fill-[#0074dd]" />
                                    </span>
                                  </div>
                                  <span>{item.value}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })()}
                {selectedSet === "basic" && product.specifications && (
                  <div className="mt-4 space-y-3">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="flex items-start gap-4">
                          <div className="min-w-[80px] font-medium text-dark">
                            {key
                              .toLowerCase()
                              .split("_")
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join(" ")}
                          </div>
                          <span className="text-dark">:</span>
                          <div className="text-gray-700">
                            {Array.isArray(value)
                              ? value.join(", ")
                              : typeof value === "object" && value !== null
                              ? JSON.stringify(value)
                              : String(value)}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* Jumlah dan CTA */}
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-blue"
                      aria-label="Kurangi"
                    >
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33301 10.0001C3.33301 9.53984 3.7061 9.16675 4.16634 9.16675H15.833C16.2932 9.16675 16.6663 9.53984 16.6663 10.0001C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10.0001Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <span className="flex items-center justify-center w-16 h-12 border-x border-gray-4">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-blue"
                      aria-label="Tambah"
                    >
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33301 10C3.33301 9.5398 3.7061 9.16671 4.16634 9.16671H15.833C16.2932 9.16671 16.6663 9.5398 16.6663 10C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10Z"
                          fill=""
                        />
                        <path
                          d="M9.99967 16.6667C9.53944 16.6667 9.16634 16.2936 9.16634 15.8334L9.16634 4.16671C9.16634 3.70647 9.53944 3.33337 9.99967 3.33337C10.4599 3.33337 10.833 3.70647 10.833 4.16671L10.833 15.8334C10.833 16.2936 10.4599 16.6667 9.99967 16.6667Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>

                  <button
                    className="bg-blue text-white px-6 py-3 rounded hover:bg-blue-dark"
                    title="Sewa Sekarang"
                  >
                    Sewa Sekarang
                  </button>

                  <button
                    className="border border-gray-300 rounded p-3 hover:bg-dark hover:text-white"
                    title="Tambah ke Keranjang"
                  >
                    <BsCartPlus className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-gray-2 py-20">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          {/* <!--== tab header start ==--> */}
          <div className="flex flex-wrap items-center bg-white rounded-[10px] shadow-1 gap-5 xl:gap-12.5 py-4.5 px-4 sm:px-6">
            {tabs.map((item, key) => (
              <button
                aria-label={`tab-${item.id}`}
                key={key}
                onClick={() => setActiveTab(item.id)}
                className={`font-medium lg:text-lg ease-out duration-200 hover:text-blue relative before:h-0.5 before:bg-blue before:absolute before:left-0 before:bottom-0 before:ease-out before:duration-200 hover:before:w-full ${
                  activeTab === item.id
                    ? "text-blue before:w-full"
                    : "text-dark before:w-0"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          {/* <!--== tab header end ==--> */}

          {/* <!--== tab content start ==--> */}
          {/* <!-- tab content one start --> */}
          <div>
            <div
              className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-12.5 ${
                activeTab === "tabOne" ? "flex" : "hidden"
              }`}
            >
              <div className="max-w-[670px] w-full">
                <h2 className="font-medium text-2xl text-dark mb-7">
                  Specifications:
                </h2>

                <p className="mb-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className="mb-6">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s.
                </p>
                <p>
                  with the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions.
                </p>
              </div>

              <div className="max-w-[447px] w-full">
                <h2 className="font-medium text-2xl text-dark mb-7">
                  Care & Maintenance:
                </h2>

                <p className="mb-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- tab content one end --> */}

          {/* <!-- tab content two start --> */}
          <div>
            <div
              className={`rounded-xl bg-white shadow-1 p-4 sm:p-6 mt-10 ${
                activeTab === "tabTwo" ? "block" : "hidden"
              }`}
            >
              {/* <!-- info item --> */}
              <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                <div className="max-w-[450px] min-w-[140px] w-full">
                  <p className="text-sm sm:text-base text-dark">Brand</p>
                </div>
                <div className="w-full">
                  <p className="text-sm sm:text-base text-dark">Apple</p>
                </div>
              </div>

              {/* <!-- info item --> */}
              <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                <div className="max-w-[450px] min-w-[140px] w-full">
                  <p className="text-sm sm:text-base text-dark">Model</p>
                </div>
                <div className="w-full">
                  <p className="text-sm sm:text-base text-dark">
                    iPhone 14 Plus
                  </p>
                </div>
              </div>

              {/* <!-- info item --> */}
              <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                <div className="max-w-[450px] min-w-[140px] w-full">
                  <p className="text-sm sm:text-base text-dark">Display Size</p>
                </div>
                <div className="w-full">
                  <p className="text-sm sm:text-base text-dark">6.7 inches</p>
                </div>
              </div>

              {/* <!-- info item --> */}
              <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                <div className="max-w-[450px] min-w-[140px] w-full">
                  <p className="text-sm sm:text-base text-dark">Display Type</p>
                </div>
                <div className="w-full">
                  <p className="text-sm sm:text-base text-dark">
                    Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM),
                    1200 nits (peak)
                  </p>
                </div>
              </div>

              {/* <!-- info item --> */}
              <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                <div className="max-w-[450px] min-w-[140px] w-full">
                  <p className="text-sm sm:text-base text-dark">
                    Display Resolution
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-sm sm:text-base text-dark">
                    1284 x 2778 pixels, 19.5:9 ratio
                  </p>
                </div>
              </div>

              {/* <!-- info item --> */}
              <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                <div className="max-w-[450px] min-w-[140px] w-full">
                  <p className="text-sm sm:text-base text-dark">Chipset</p>
                </div>
                <div className="w-full">
                  <p className="text-sm sm:text-base text-dark">
                    Apple A15 Bionic (5 nm)
                  </p>
                </div>
              </div>

              {/* <!-- info item --> */}
              <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                <div className="max-w-[450px] min-w-[140px] w-full">
                  <p className="text-sm sm:text-base text-dark">Memory</p>
                </div>
                <div className="w-full">
                  <p className="text-sm sm:text-base text-dark">
                    128GB 6GB RAM | 256GB 6GB RAM | 512GB 6GB RAM
                  </p>
                </div>
              </div>

              {/* <!-- info item --> */}
              <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                <div className="max-w-[450px] min-w-[140px] w-full">
                  <p className="text-sm sm:text-base text-dark">Main Camera</p>
                </div>
                <div className="w-full">
                  <p className="text-sm sm:text-base text-dark">
                    12MP + 12MP | 4K@24/25/30/60fps, stereo sound rec.
                  </p>
                </div>
              </div>

              {/* <!-- info item --> */}
              <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                <div className="max-w-[450px] min-w-[140px] w-full">
                  <p className="text-sm sm:text-base text-dark">
                    Selfie Camera
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-sm sm:text-base text-dark">
                    12 MP | 4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS
                  </p>
                </div>
              </div>

              {/* <!-- info item --> */}
              <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                <div className="max-w-[450px] min-w-[140px] w-full">
                  <p className="text-sm sm:text-base text-dark">Battery Info</p>
                </div>
                <div className="w-full">
                  <p className="text-sm sm:text-base text-dark">
                    Li-Ion 4323 mAh, non-removable | 15W wireless (MagSafe),
                    7.5W wireless (Qi)
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- tab content two end --> */}

          {/* <!-- tab content three start --> */}
          <div>
            <div
              className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-12.5 ${
                activeTab === "tabThree" ? "flex" : "hidden"
              }`}
            >
              <div className="max-w-[570px] w-full">
                <h2 className="font-medium text-2xl text-dark mb-9">
                  03 Review for this product
                </h2>

                <div className="flex flex-col gap-6">
                  {/* <!-- review item --> */}
                  <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <a href="#" className="flex items-center gap-4">
                        <div className="w-12.5 h-12.5 rounded-full overflow-hidden">
                          <Image
                            src="/images/users/user-01.jpg"
                            alt="author"
                            className="w-12.5 h-12.5 rounded-full overflow-hidden"
                            width={50}
                            height={50}
                          />
                        </div>

                        <div>
                          <h3 className="font-medium text-dark">
                            Davis Dorwart
                          </h3>
                          <p className="text-custom-sm">Serial Entrepreneur</p>
                        </div>
                      </a>

                      <div className="flex items-center gap-1">
                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>

                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>

                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>

                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>

                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <p className="text-dark mt-6">
                      “Lorem ipsum dolor sit amet, adipiscing elit. Donec
                      malesuada justo vitaeaugue suscipit beautiful vehicula’’
                    </p>
                  </div>

                  {/* <!-- review item --> */}
                  <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <a href="#" className="flex items-center gap-4">
                        <div className="w-12.5 h-12.5 rounded-full overflow-hidden">
                          <Image
                            src="/images/users/user-01.jpg"
                            alt="author"
                            className="w-12.5 h-12.5 rounded-full overflow-hidden"
                            width={50}
                            height={50}
                          />
                        </div>

                        <div>
                          <h3 className="font-medium text-dark">
                            Davis Dorwart
                          </h3>
                          <p className="text-custom-sm">Serial Entrepreneur</p>
                        </div>
                      </a>

                      <div className="flex items-center gap-1">
                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>

                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>

                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>

                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>

                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <p className="text-dark mt-6">
                      “Lorem ipsum dolor sit amet, adipiscing elit. Donec
                      malesuada justo vitaeaugue suscipit beautiful vehicula’’
                    </p>
                  </div>

                  {/* <!-- review item --> */}
                  <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <a href="#" className="flex items-center gap-4">
                        <div className="w-12.5 h-12.5 rounded-full overflow-hidden">
                          <Image
                            src="/images/users/user-01.jpg"
                            alt="author"
                            className="w-12.5 h-12.5 rounded-full overflow-hidden"
                            width={50}
                            height={50}
                          />
                        </div>

                        <div>
                          <h3 className="font-medium text-dark">
                            Davis Dorwart
                          </h3>
                          <p className="text-custom-sm">Serial Entrepreneur</p>
                        </div>
                      </a>

                      <div className="flex items-center gap-1">
                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>

                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>

                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>

                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>

                        <span className="cursor-pointer text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                              fill=""
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <p className="text-dark mt-6">
                      “Lorem ipsum dolor sit amet, adipiscing elit. Donec
                      malesuada justo vitaeaugue suscipit beautiful vehicula’’
                    </p>
                  </div>
                </div>
              </div>

              <div className="max-w-[550px] w-full">
                <form>
                  <h2 className="font-medium text-2xl text-dark mb-3.5">
                    Add a Review
                  </h2>

                  <p className="mb-6">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <div className="flex items-center gap-3 mb-7.5">
                    <span>Your Rating*</span>

                    <div className="flex items-center gap-1">
                      <span className="cursor-pointer text-[#FBB040]">
                        <svg
                          className="fill-current"
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                            fill=""
                          />
                        </svg>
                      </span>

                      <span className="cursor-pointer text-[#FBB040]">
                        <svg
                          className="fill-current"
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                            fill=""
                          />
                        </svg>
                      </span>

                      <span className="cursor-pointer text-[#FBB040]">
                        <svg
                          className="fill-current"
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                            fill=""
                          />
                        </svg>
                      </span>

                      <span className="cursor-pointer text-gray-5">
                        <svg
                          className="fill-current"
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                            fill=""
                          />
                        </svg>
                      </span>

                      <span className="cursor-pointer text-gray-5">
                        <svg
                          className="fill-current"
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                            fill=""
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
                    <div className="mb-5">
                      <label htmlFor="comments" className="block mb-2.5">
                        Comments
                      </label>

                      <textarea
                        name="comments"
                        id="comments"
                        rows={5}
                        placeholder="Your comments"
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      ></textarea>

                      <span className="flex items-center justify-between mt-2.5">
                        <span className="text-custom-sm text-dark-4">
                          Maximum
                        </span>
                        <span className="text-custom-sm text-dark-4">
                          0/250
                        </span>
                      </span>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5 sm:gap-7.5 mb-5.5">
                      <div>
                        <label htmlFor="name" className="block mb-2.5">
                          Name
                        </label>

                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your name"
                          className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block mb-2.5">
                          Email
                        </label>

                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your email"
                          className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
                    >
                      Submit Reviews
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- tab content three end --> */}
          {/* <!--== tab content end ==--> */}
        </div>
      </section>

      {product.id}
      <br />
      {product.categoryId}

      <RecentlyViewdItems
        categoryId={product.categoryId}
        excludeId={product.id}
      />

      <Newsletter />
    </>
  );
};

export default ProductDetails;
