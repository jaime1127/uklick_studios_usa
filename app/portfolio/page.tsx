import { Metadata } from "next";
import Collection from "@/app/ui/components/content/Collection/Collection";
import { fetchCollectionData } from "../lib/content";
import { GetCollectionQuery } from "../ui/components/generated/gql/types";

export const metadata: Metadata = {
  title: "Portfolio",
};
const collectionSets = (await fetchCollectionData(
  "holiday-set"
)) as GetCollectionQuery;

export default async function Page() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
      <Collection
        heading={collectionSets.collection?.heading || ""}
        sets={collectionSets.collection?.sets.map((set) => ({
          asset: {
            url: set.image?.url || "",
            alt: set.image?.alt || "",
          },
          title: set.title || "",
          description: set.description || "",
          slug: "portfolio/" + set.slug || "",
        }))}
      />
    </main>
  );
}
