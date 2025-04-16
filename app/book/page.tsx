import { Suspense } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";
import Calendly from "@/app/ui/book/Calendly";

export const metadata: Metadata = {
  title: "Dashboard | Acme Dashboard",
};

export default async function Page() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Book Session</h1>
      <Calendly />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense></Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense></Suspense>
      </div>
    </main>
  );
}
