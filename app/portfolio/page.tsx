import { Metadata } from "next";
import { fetchPortfolioData } from "../lib/content";
import { GetPortfolioQuery } from "../ui/components/generated/gql/types";
import Portfolio from "../ui/components/content/Portfilio/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default async function Page() {
  const portfolioSets = (await fetchPortfolioData(
    "portfolio-slug"
  )) as GetPortfolioQuery;

  return (
    <main
      className="relative mx-auto max-w-7xl mb-4"
      style={{ paddingTop: "4rem" }}
    >
      <div className="py-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Our Portfolio
        </h1>
        <p className="text-lg text-gray-600 mt-2 text-center">
          Explore our portfolio to see the creativity, passion, and
          professionalism we bring to every session.
        </p>
        <Portfolio
          collections={
            portfolioSets.portfolio?.collection.map((collection) => ({
              heading: collection.heading || "",
              sets: collection.sets.map((set) => ({
                heading: set.title || "",
                asset: {
                  url: set.image?.url || "",
                  alt: set.image?.alt || "",
                },
                title: set.title || "",
                description: set.description || "",
                slug: "portfolio/" + set.slug || "",
              })),
            })) || []
          }
        />
      </div>
    </main>
  );
}
