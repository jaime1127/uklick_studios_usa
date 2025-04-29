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
  videoAsset?: {
    asset: {
      alt: string;
      size: number;
      url: string;
      handle: string;
    };
  };
}

export default function Hero({
  blog = undefined,
  heading = undefined,
  description = undefined,
  link = { anchor: "", label: "" },
  asset = { url: "", alt: "" },
  video = false,
  videoAsset = {
    asset: {
      alt: "",
      size: 0,
      url: "",
      handle: "",
    },
  },
}: HeroProps) {
  return (
    <div className="w-full h-screen overflow-hidden">
      {video && <Video videoAsset={videoAsset} />}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-10 text-center">
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
        {asset.url && (
          <Image
            src={asset.url}
            alt={asset.alt || "Hero Image"}
            width={350}
            height={350}
            loading="lazy"
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
