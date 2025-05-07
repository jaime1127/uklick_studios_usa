import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/app/ui/layout/Header/Header";
import Footer from "@/app/ui/layout/Footer/Footer";
import "./globals.css";
import { GetLayoutQuery } from "./ui/content/lib/generated/gql/types";
import { fetchLayoutData } from "@/app/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "uKlick Studios USA",
  description: "Created by uKlick Studios USA",
};

const layout = (await fetchLayoutData("layout-slug")) as GetLayoutQuery;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header
          image={{
            alt: layout.header?.image?.alt || "",
            url: layout.header?.image?.url,
          }}
          links={
            layout.header?.links.map((link) => ({
              anchor: link.anchor || "",
              label: link.label || "",
              slug: link.slug || "",
            })) || []
          }
        />
        {children}
        <Footer
          links={
            layout.footer?.links.map((link) => ({
              anchor: link.anchor || "",
              label: link.label || "",
              slug: link.slug || "",
            })) || []
          }
          ownership={layout.footer?.ownership || ""}
        />
      </body>
    </html>
  );
}
