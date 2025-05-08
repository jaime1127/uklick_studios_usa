import { Metadata } from "next";
import Aboutus from "@/app/ui/aboutus/Aboutus";

export const metadata: Metadata = {
  title: "About Us",
};

export default async function Page() {
  return (
    <main>
      <Aboutus />
    </main>
  );
}
