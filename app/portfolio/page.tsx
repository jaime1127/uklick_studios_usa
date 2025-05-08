import { Suspense } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";
import Collection from "@/app/ui/components/content/Collection/Collection";

export const metadata: Metadata = {
  title: "About Us | About Us",
};

export default async function Page() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
      <Collection />
    </main>
  );
}
