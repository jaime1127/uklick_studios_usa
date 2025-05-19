"use client";
import Image from "next/image";

export interface CollectionProps {
  sets?: {
    asset?: {
      url?: string;
      alt?: string;
    };
    title?: string;
    description?: string;
    slug?: string;
  }[];
}

export default function ImageList({
  sets = [
    {
      asset: {
        url: "",
        alt: "",
      },
      title: "",
      description: "",
      slug: "",
    },
  ],
}: CollectionProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl  py-16 sm:py-24 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {sets.map((set) => (
            <Image
              alt={set?.asset?.alt || ""}
              src={set?.asset?.url || ""}
              width={550}
              height={400}
              loading="lazy"
              key={set.slug || ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
