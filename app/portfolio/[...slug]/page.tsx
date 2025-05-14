import ImageList from "@/app/ui/components/content/ImageList/ImageList";
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
      <ImageList />
    </main>
  );
}
