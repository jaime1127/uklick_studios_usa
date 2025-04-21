import type { GetHeroQuery } from "@/app/ui/content/lib/generated/gql/types";
import { fetchHeroData } from "@/app/lib/content";

import Video from "@/app/ui/content/lib/Video/Video";
import Hero from "@/app/ui/content/lib/Hero/Hero";

const hero = (await fetchHeroData("home-page")) as GetHeroQuery;

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div>
          <Video />
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
        </div>
      </main>
    </div>
  );
}
