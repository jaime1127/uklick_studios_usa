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

  console.log("portfolioSets", portfolioSets);

  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>

      <Portfolio
        collections={
          portfolioSets.portfolio?.collection.map((collection) => ({
            heading: collection.slug || "",
            sets: collection.sets.map((set) => ({
              asset: {
                url: set.image?.url || "",
                alt: set.image?.alt || "",
              },
              title: set.title || "",
              description: set.description || "",
              slug: "portfolio/" + collection.slug || "",
            })),
          })) || []
        }
      />
    </main>
  );
}
