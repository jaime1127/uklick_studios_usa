import { Suspense } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";
import Contact from "../ui/contact/Contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function Page() {
  return (
    <main>
      <Contact />
    </main>
  );
}
