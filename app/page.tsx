import type { GetContentPageQuery } from "@/app/ui/components/generated/gql/types";
import { fetchContentPage } from "@/app/lib/content";

import { Hero, Carousel, Promo, Collection } from "@/app/ui/components/content";

export default async function Home() {
  const content = (await fetchContentPage("home-page")) as GetContentPageQuery;

  return (
    <main className="mx-auto max-w-7xl bg-white">
      <Hero {...content.contentPage?.hero} video={true} />

      <Carousel {...content.contentPage?.carousel?.[0]} />

      <Promo {...content.contentPage?.promo?.[0]} />

      <Collection {...content.contentPage?.collection} />

      <Carousel {...content.contentPage?.carousel?.[1]} />
    </main>
  );
}
