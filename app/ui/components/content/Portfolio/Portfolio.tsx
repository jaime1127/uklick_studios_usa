"use client";

import Collection, { CollectionProps } from "../Collection/Collection";

interface PortfolioProps {
  collection?: CollectionProps[] | undefined | null;
  heading?: string | undefined | null;
  description?: string | undefined | null;
}

export default function Portfolio({
  collection = [],
  heading = "",
  description = "",
}: PortfolioProps) {
  return (
    <div className="py-4">
      <div className="justify-items-center">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          {heading}
        </h1>
        <p className="text-lg text-gray-600 mt-2 text-center">{description}</p>
      </div>
      <div className="space-y-12">
        {collection?.map((collection, index) => (
          <Collection
            key={index}
            heading={collection.heading}
            sets={collection.sets}
          />
        ))}
      </div>
    </div>
  );
}
