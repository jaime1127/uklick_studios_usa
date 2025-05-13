"use client";

import Link from "next/link";
import Image from "next/image";

interface PromoProps {
  heading?: string;
  description?: string;
  eyebrow?: string;
  image?: {
    url: string;
    alt: string;
  };
}

export default function Promo({
  heading = "",
  description = "",
  eyebrow = "",
  image = { url: "", alt: "" },
}: PromoProps) {
  return (
    <div className="relative bg-gray-500 mt-4 mb-4">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <Image
          alt={image.alt}
          src={image.url}
          className="size-full object-cover"
          width={500}
          height={500}
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            {eyebrow}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {heading}
          </p>
          <p className="mt-6 text-base/7 text-gray-300">{description}</p>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex rounded-md px-3.5 py-2.5 text-sm font-semibold bg-[#999DA0] text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book Your Session Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
