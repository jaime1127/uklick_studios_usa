import type {
  GetCarouselQuery,
  GetHeroQuery,
  GetPromoQuery,
} from "@/app/ui/components/generated/gql/types";
import {
  fetchCarouselData,
  fetchHeroData,
  fetchPromoData,
} from "@/app/lib/content";

import { Hero, Carousel, Promo, ImageList } from "@/app/ui/components/content";

const hero = (await fetchHeroData("home-page")) as GetHeroQuery;

const carousel = (await fetchCarouselData(
  "home-page-carousel"
)) as GetCarouselQuery;

const promo = (await fetchPromoData("home-page-promo")) as GetPromoQuery;

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
        videoAsset={{
          asset: {
            url: hero.hero?.videoAsset?.asset?.url || "",
            alt: "",
            size: 0,
            handle: "",
          },
        }}
      />

      <Carousel
        slides={
          carousel.carousel?.slides?.map((slide) => ({
            src: slide.image?.url || "",
            alt: slide.image?.alt || "",
          })) || []
        }
      />

      <Promo
        heading={promo.promo?.heading || ""}
        description={promo.promo?.description || ""}
        eyebrow={promo.promo?.eyebrow || ""}
        image={{
          alt: promo.promo?.image?.alt || "",
          url: promo.promo?.image?.url || "",
        }}
      />

      <ImageList />
    </main>
  );
}
