"use client";

import Image from "next/image";
import Link from "next/link";
import Video from "../Video/Video";

interface HeroProps {
  blog?: string | undefined | null;
  heading?: string | undefined | null;
  description?: string | undefined | null;
  link?:
    | {
        anchor?: string | undefined | null;
        label?: string | undefined | null;
      }
    | undefined
    | null;
  asset?:
    | {
        url?: string | undefined | null;
        alt?: string | undefined | null;
      }
    | undefined
    | null;
  video?: boolean;
  videoAsset?:
    | {
        asset?:
          | {
              alt?: string | undefined | null;
              size?: number | undefined | null;
              url?: string | undefined | null;
              handle?: string | undefined | null;
            }
          | undefined
          | null;
      }
    | undefined
    | null;
}

export default function Hero({
  blog = "",
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
    <div className="w-full h-lvh pb-6">
      {video ? (
        <Video
          videoAsset={{
            asset: videoAsset?.asset
              ? {
                  alt: videoAsset.asset?.alt ?? undefined,
                  size: videoAsset.asset?.size ?? undefined,
                  url: videoAsset.asset?.url ?? undefined,
                  handle: videoAsset.asset?.handle ?? undefined,
                }
              : undefined,
          }}
        />
      ) : (
        <Image
          src={asset?.url || "/camera.jpg"}
          alt={asset?.alt || "Hero Image"}
          width={1200}
          height={1200}
          loading="lazy"
          className="absolute inset-0 w-full h-lvh object-cover -z-10"
        />
      )}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 z-10 text-center h-lvh p-4 m-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          {link && (
            <Link
              href="/aboutus"
              className="whitespace-nowrap font-semibold text-indigo-400 inline-flex gap-1.5 underline hover:no-underline"
            >
              {blog && <span> {blog} &rarr;</span>}
            </Link>
          )}
          <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-50 sm:text-6xl">
            {heading}
          </h1>
          <p className="text-pretty text-lg font-medium text-gray-50 sm:text-xl/8">
            {description}
          </p>
          {link?.label && (
            <Link
              href={link?.anchor || ""}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {link?.label}
            </Link>
          )}
        </div>
        {asset?.url && (
          <Image
            src={asset.url}
            alt={asset.alt || "Hero Image"}
            width={300}
            height={300}
            loading="lazy"
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
