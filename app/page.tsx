import Hero from "@/app/ui/content/lib/Hero/Hero";
import CTA from "@/app/ui/content/lib/CTA/CTA";
import { fetchHeroData } from "@/app/lib/content";
import type { GetHeroQuery } from "@/app/ui/content/lib/generated/gql/types";
import Video from "@/app/ui/content/lib/Video/Video";

const hero = (await fetchHeroData("home-page")) as GetHeroQuery;

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Video/>
          <Hero
            blog={hero.hero?.blog || ""}
            heading={hero.hero?.heading || ""}
            description={hero.hero?.description || ""}
            link={{
              anchor: hero.hero?.link?.anchor || "",
              label: hero.hero?.link?.label || "",
            }}
            asset={{
              url: hero.hero?.asset?.url || "",
              alt: hero.hero?.asset?.alt || "",
            }}
          />
          <CTA />
        </main>
      </div>
    </div>
  );
}
