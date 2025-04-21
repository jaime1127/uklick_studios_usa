"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  blog?: string | undefined;
  heading?: string;
  description?: string;
  link?: {
    anchor: string;
    label: string;
  };
  asset?: {
    url: string;
    alt: string;
  };
}

export default function Hero({
  blog = undefined,
  heading = undefined,
  description = undefined,
  link = { anchor: "", label: "" },
  asset = { url: "", alt: "" },
}: HeroProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center py-4">
      <div className="flex flex-col items-center gap-8 text-center">
        <Link
          href="/aboutus"
          className="whitespace-nowrap font-semibold text-gray-900"
        >
          {blog}
        </Link>
        <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          {heading}
        </h1>
        <p className="text-pretty text-lg font-medium text-gray-900 sm:text-xl/8">
          {description}
        </p>
        <Link
          href={link.anchor}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {link.label}
        </Link>
      </div>
      <Image
        src={asset.url}
        alt={asset.alt}
        width={800}
        height={800}
        loading="lazy"
      />
    </div>
  );
}
