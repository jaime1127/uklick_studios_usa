import { Metadata } from "next";
import Contact from "../ui/contact/Contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function Page() {
  return (
    <main>
      <Contact />
    </main>
  );
}
