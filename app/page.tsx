import type {
  GetCarouselQuery,
  GetCollectionQuery,
  GetHeroQuery,
  GetPromoQuery,
} from "@/app/ui/components/generated/gql/types";
import {
  fetchCarouselData,
  fetchCollectionData,
  fetchHeroData,
  fetchPromoData,
} from "@/app/lib/content";

import { Hero, Carousel, Promo, Collection } from "@/app/ui/components/content";

export default async function Home() {
  const [hero, carousel, promo, collectionSets] = await Promise.all([
    fetchHeroData("home-page") as Promise<GetHeroQuery>,
    fetchCarouselData("home-page-carousel") as Promise<GetCarouselQuery>,
    fetchPromoData("home-page-promo") as Promise<GetPromoQuery>,
    fetchCollectionData("holiday-set") as Promise<GetCollectionQuery>,
  ]);
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

      <Collection
        heading={collectionSets.collection?.heading || ""}
        sets={collectionSets.collection?.sets.map((set) => ({
          asset: {
            url: set.image?.url || "",
            alt: set.image?.alt || "",
          },
          title: set.title || "",
          description: set.description || "",
          slug: "portfolio/" + set.slug || "",
        }))}
      />
    </main>
  );
}
