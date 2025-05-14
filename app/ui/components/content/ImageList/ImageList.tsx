"use client";

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
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {sets.map((set) => (
            <a key={set.slug} href={"product.href"} className="group">
              <img
                alt={set?.asset?.alt}
                src={set?.asset?.url}
                className="aspect-square w-full overflow-hidden rounded-lg object-cover group-hover:opacity-75 sm:aspect-2/3"
              />
              {/* <p>test</p> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
