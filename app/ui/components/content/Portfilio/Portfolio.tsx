"use client";

import Collection, { CollectionProps } from "../Collection/Collection";

interface PortfolioProps {
  collections?: CollectionProps[];
}

export default function Portfolio({ collections = [] }: PortfolioProps) {
  console.log(collections);
  return (
    <div className="space-y-12">
      {collections?.map((collection, index) => (
        <Collection
          key={index}
          heading={collection.heading}
          sets={collection.sets}
        />
      ))}
    </div>
  );
}
