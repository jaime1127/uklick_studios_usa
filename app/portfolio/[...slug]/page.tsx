import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Details",
};

export default function PortfolioPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug; // This will be an array of the path segments

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Portfolio Page</h1>
      <p className="mt-4 text-lg text-gray-600">
        You are viewing the portfolio for: <strong>{slug.join(" / ")}</strong>
      </p>
    </main>
  );
}