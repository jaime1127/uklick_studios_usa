import { Metadata } from "next";
import Aboutus from "@/app/ui/aboutus/Aboutus";
import { fetchContentPage } from "../lib/content";
import { GetContentPageQuery } from "../ui/components/generated/gql/types";

export const metadata: Metadata = {
  title: "About Us",
};

export default async function Page() {
  const content = (await fetchContentPage("about-us")) as GetContentPageQuery;

  const contentArray =
    content.contentPage && Array.isArray(content.contentPage.content)
      ? content.contentPage.content
      : [];

  return (
    <main>
      <Aboutus content={contentArray} />
    </main>
  );
}
