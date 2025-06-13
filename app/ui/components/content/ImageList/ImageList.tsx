"use client";
import { useState } from "react";

import Image from "next/image";
import Dialog from "../Dialog/Dialog";

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
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{ url?: string; alt?: string }>({});

  function handleDialog(url: string, alt: string) {
    setSelected({ url, alt });
    setOpen(true);
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl  py-16 sm:py-24 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {sets.map((set) => (
            <button
              key={set.slug || ""}
              onClick={() =>
                handleDialog(set.asset?.url || "", set.asset?.alt || "")
              }
              className="focus:outline-none"
              type="button"
            >
              <Image
                alt={set?.asset?.alt || ""}
                src={set?.asset?.url || ""}
                width={550}
                height={400}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
      <Dialog
        open={open}
        onClose={setOpen}
        url={selected.url}
        alt={selected.alt}
      />
    </div>
  );
}
