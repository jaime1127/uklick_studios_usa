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
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
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
    </main>
  );
}
