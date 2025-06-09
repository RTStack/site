"use client";
import React from "react";

import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";
import { StarRating } from "@/components/Common/StarRating";
import { site } from "@/data/default";

import { BsEye, BsCartCheck, BsWhatsapp } from "react-icons/bs";


const ProductGridItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();

  // update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  // add to cart
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
  };

  const handleItemToWishList = () => {
    dispatch(
      addItemToWishlist({
        ...item,
        status: "available",
        quantity: 1,
      })
    );
  };

  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
  };

  const truncate = (html: string, max: number = 100): string => {
    if (html.length <= max) return html;
    return html.slice(0, max) + " ...";
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-[#F6F7FB] min-h-[270px] mb-4">
        <a href={`/rental/${item.slug}`} className="" title={item.title}>
          <Image
            src={item.imgs.previews[0]}
            alt={item.title}
            width={250}
            height={250}
          />
        </a>

        <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 group-hover:translate-y-0">
          <button
            onClick={() => {
              openModal();
              handleQuickViewUpdate();
            }}
            aria-label="button for quick view"
            className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-blue"
          >
              <BsEye />
          </button>

          <button
            onClick={() => {
              const phone = site.whatsapp;
              const message = encodeURIComponent(
                `Hai ${site.name},\nsaya mau sewa:\n\`\`\`- ${item.title} (1 unit)\`\`\``
              );
              window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
            }}
            className="inline-flex items-center gap-1 font-medium text-custom-sm py-[7px] px-5 rounded-[5px] bg-blue text-white ease-out duration-200 hover:bg-blue-dark"
          >
            <BsWhatsapp />
            Rental
          </button>

          <button
            onClick={() => handleAddToCart()}
            aria-label="button for favorite select"
            id="favOne"
            className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-blue"
          >
            <BsCartCheck />
          </button>
        </div>
      </div>
      <Link
      onClick={() => handleProductDetails()}
      href={`/rental/${item.slug}`} title={item.title}>
        <div className="flex items-center gap-2.5 mb-2">
          <StarRating rating={item.rating} />

          <p className="text-custom-sm">
            {item.rating} ({item.reviews} reviews)
          </p>
        </div>

        <h3
          className="flex items-center justify-between heading font-bold text-dark ease-out duration-200 hover:text-blue mb-1.5"
        >
          <span className=""> {item.title} </span>
          <span className="font-light"> {item.spec} </span>
        </h3>
        <p
          className="text-custom-sm mb-2 max-h-[44px] overflow-hidden"
          dangerouslySetInnerHTML={{
            __html: item.description ? truncate(item.description, 70) : "",
          }}
        />
      </Link>
    </div>
  );
};

export default ProductGridItem;
