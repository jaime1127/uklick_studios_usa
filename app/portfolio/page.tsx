import { Metadata } from "next";
import { fetchPortfolioData } from "../lib/content";
import { GetPortfolioQuery } from "../ui/components/generated/gql/types";

import Portfolio from "../ui/components/content/Portfolio/Portfolio";
export const metadata: Metadata = {
  title: "Portfolio",
};

export default async function Page() {
  const portfolioSets = (await fetchPortfolioData(
    "portfolio-slug"
  )) as GetPortfolioQuery;
  return (
    <main className="relative mx-auto max-w-7xl mb-4 pt-16 bg-white">
      <Portfolio {...portfolioSets.portfolio} />
    </main>
  );
}
