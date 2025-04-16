import Hero from "@/app/ui/content/Hero/Hero";
import CTA from "@/app/ui/content/CTA/CTA";

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Hero />
          <CTA />
        </main>
      </div>
    </div>
  );
}
