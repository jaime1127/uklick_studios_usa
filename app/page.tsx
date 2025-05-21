import type { GetContentPageQuery } from "@/app/ui/components/generated/gql/types";
import { fetchContentPage } from "@/app/lib/content";

import { Hero, Carousel, Promo, Collection } from "@/app/ui/components/content";

export default async function Home() {
  const content = (await fetchContentPage("home-page")) as GetContentPageQuery;

  return (
    <main className="mx-auto max-w-7xl">
      <Hero
        blog={content.contentPage?.hero?.blog || ""}
        heading={content.contentPage?.hero?.heading || ""}
        description={content.contentPage?.hero?.description || ""}
        link={{
          anchor: content.contentPage?.hero?.link?.anchor || "",
          label: content.contentPage?.hero?.link?.label || "",
        }}
        asset={{
          url: content.contentPage?.hero?.asset?.url || "",
          alt: content.contentPage?.hero?.asset?.alt || "",
        }}
        video={!!content.contentPage?.hero?.videoAsset}
        videoAsset={{
          asset: {
            url: content.contentPage?.hero?.videoAsset?.asset?.url || "",
            alt: content.contentPage?.hero?.videoAsset?.asset?.alt || "",
            size: content.contentPage?.hero?.videoAsset?.asset?.size || 0,
            handle: content.contentPage?.hero?.videoAsset?.asset?.handle || "",
          },
        }}
      />

      <Carousel
        heading={content.contentPage?.carousel?.[1]?.heading || ""}
        description={content.contentPage?.carousel?.[1]?.description || ""}
        link={{
          anchor: content.contentPage?.carousel?.[1]?.link?.anchor || "",
          label: content.contentPage?.carousel?.[1]?.link?.label || "",
        }}
        slides={
          content.contentPage?.carousel?.[1]?.slides?.map((slide) => ({
            src: slide.image?.url || "",
            alt: slide.image?.alt || "",
          })) || []
        }
      />

      <Promo
        heading={content.contentPage?.promo?.[0]?.heading || ""}
        description={content.contentPage?.promo?.[0]?.description || ""}
        eyebrow={content.contentPage?.promo?.[0]?.eyebrow || ""}
        image={{
          alt: content.contentPage?.promo?.[0]?.image?.alt || "",
          url: content.contentPage?.promo?.[0]?.image?.url || "",
        }}
      />

      <Collection
        heading={content.contentPage?.collection?.heading || ""}
        sets={
          content.contentPage?.collection?.sets?.map((set) => ({
            asset: {
              url: set.image?.url || "",
              alt: set.image?.alt || "",
            },
            title: set.title || "",
            description: set.description || "",
            slug: "portfolio/" + (set.slug || ""),
          })) || []
        }
      />

      <Carousel
        heading={content.contentPage?.carousel?.[0]?.heading || ""}
        description={content.contentPage?.carousel?.[0]?.description || ""}
        link={{
          anchor: content.contentPage?.carousel?.[0]?.link?.anchor || "",
          label: content.contentPage?.carousel?.[0]?.link?.label || "",
        }}
        slides={
          content.contentPage?.carousel?.[0]?.slides?.map((slide) => ({
            src: slide.image?.url || "",
            alt: slide.image?.alt || "",
          })) || []
        }
      />
    </main>
  );
}
