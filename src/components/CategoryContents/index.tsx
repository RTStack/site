"use client";
import React from "react";

type Props = {
  content: React.ReactNode;
};

const CategoryContents = ({ content }: Props) => {
  return (
    <>
    <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {content}
      </div>
    </section>
    </>
  );
};

export default CategoryContents;