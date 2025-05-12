"use client";

import Image from "next/image";
import Link from "next/link";

interface CollectionProps {
  heading?: string;
  slug: string;
  sets?: {
    asset?: {
      url?: string;
      alt?: string;
    };
    title?: string;
    description?: string;
  }[];
}

export default function Collection({
  heading = "",
  slug = "/",
  sets = [
    {
      asset: {
        url: "",
        alt: "",
      },
      title: "",
      description: "",
    },
  ],
}: CollectionProps) {
  return (
    <div className="pb-4">
      <div className="mx-auto max-w-7xl p-8 bg-gray-100">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-2xl font-bold text-gray-900">{heading || ""}</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {sets.map((set) => (
              <div key={set.title} className="group relative">
                <Image
                  alt={set.asset?.alt || ""}
                  src={set.asset?.url || ""}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                  width={500}
                  height={500}
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <p className="text-base font-semibold text-gray-900">
                    {set.title}
                  </p>{" "}
                  <Link href={slug}>
                    <span className="absolute inset-0" />
                    {set.description}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
