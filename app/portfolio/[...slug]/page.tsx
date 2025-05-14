import ImageList from "@/app/ui/components/content/ImageList/ImageList";
import { Metadata } from "next";

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
      {/* <ImageList/> */}
    </main>
  );
}
