import { fetchImageListData } from "@/app/lib/content";
import ImageList from "@/app/ui/components/content/ImageList/ImageList";
import { GetImageListQuery } from "@/app/ui/components/generated/gql/types";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Details",
};

export default async function PortfolioPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await props.params;
  console.log(slug.slug);
  const portfolioSets = (await fetchImageListData(
    slug.slug[0] || "default-slug"
  )) as GetImageListQuery;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Portfolio Page</h1>
      <p className="mt-4 text-lg text-gray-600">
        You are viewing the portfolio for: <strong>{slug.slug}</strong>
      </p>
      <Link
        href="/portfolio"
        className="whitespace-nowrap font-semibold text-[#999DA0] inline-flex gap-1.5 underline hover:no-underline"
      >
        Return to Portfolio
        <ArrowLongRightIcon className="h-6 w-6 text-[#999DA0]" />
      </Link>
      <ImageList
        sets={
          portfolioSets.imageList?.set.map((set, index) => ({
            slug: set.slug || `fallback-key-${index}`, // Use a fallback key if slug is empty
            asset: {
              url: set.image?.url || "",
              alt: set.image?.alt || "",
            },
          })) || []
        }
      />
    </main>
  );
}
