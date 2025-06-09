import Link from "next/link";
import React from "react";
import {site} from "@/data/default";

const Breadcrumb = ({ title, pages }) => {
  return (
    <div className="overflow-hidden shadow-breadcrumb pt-[140px] sm:pt-[140px] lg:pt-[160px] xl:pt-[140px]">
      <div className="border-t border-gray-3">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-5 xl:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="font-semibold text-dark text-xl sm:text-2xl xl:text-custom-2">
              {title}
            </h1>

            <ul className="flex items-center gap-2">
              <li className="text-custom-sm hover:text-blue">
                <Link href="/" title={site.name}>Home</Link>
                <span> /</span>
              </li>

              {pages.length > 0 &&
                pages.map((page, key) => (
                  <li key={key} className="text-custom-sm capitalize flex items-center gap-1">
                    <Link
                      href={page.slug}
                      title={page.title}
                      className={key === pages.length - 1 ? "text-blue" : "hover:text-blue"}
                    >
                      {page.title}
                    </Link>
                    {key !== pages.length - 1 && <span> /</span>}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
