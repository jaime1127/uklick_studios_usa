import { Metadata } from "next";
import Calendly from "@/app/ui/book/Calendly";

export const metadata: Metadata = {
  title: "Book",
};

export default async function Page() {
  return (
    <main className="relative">
      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2">
          <Calendly inline />
        </main>
      </div>
    </main>
  );
}
