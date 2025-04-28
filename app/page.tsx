import type { GetHeroQuery } from "@/app/ui/content/lib/generated/gql/types";
import { fetchHeroData } from "@/app/lib/content";

import Hero from "@/app/ui/content/lib/Hero/Hero";
import Feature from "./ui/content/lib/Feature/Feature";
import Carousel from "./ui/content/lib/Carousel/Carousel";

const hero = (await fetchHeroData("home-page")) as GetHeroQuery;

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
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
        video
      />
      <Carousel />
      <Feature />
    </main>
  );
}
