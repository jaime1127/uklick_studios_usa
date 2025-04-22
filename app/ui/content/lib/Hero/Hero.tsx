"use client";

import Image from "next/image";
import Link from "next/link";
import Video from "../Video/Video";

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
  video?: boolean;
}

export default function Hero({
  blog = undefined,
  heading = undefined,
  description = undefined,
  link = { anchor: "", label: "" },
  asset = { url: "", alt: "" },
  video = false,
}: HeroProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center py-4">
      {video && (
        <div className="absolute inset-0 -z-10">
          <Video />
        </div>
      )}
      <div className="flex flex-col items-center gap-8 text-center z-10">
        <Link
          href="/aboutus"
          className="whitespace-nowrap font-semibold text-[#999DA0]"
        >
          {blog}
        </Link>
        <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-50 sm:text-6xl">
          {heading}
        </h1>
        <p className="text-pretty text-lg font-medium text-gray-50 sm:text-xl/8">
          {description}
        </p>
        <Link
          href={link.anchor}
          className="rounded-md bg-[#999DA0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {link.label}
        </Link>
      </div>
      {asset.url && (
        <div className="z-10 mt-8">
          <Image
            src={asset.url}
            alt={asset.alt || "Hero Image"}
             width={800}
            height={800}
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
