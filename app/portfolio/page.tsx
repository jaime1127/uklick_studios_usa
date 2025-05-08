import { Metadata } from "next";
import Collection from "@/app/ui/components/content/Collection/Collection";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default async function Page() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
      <Collection />
    </main>
  );
}
