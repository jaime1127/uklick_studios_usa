import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  blog?: string | undefined;
  heading?: string;
  description?: string;
  link?: {
    anchor: string;
    label: string;
  };
  asset?: {
    url: string;
    alt: string;
  };
}

export default function Hero({
  blog = undefined,
  heading = undefined,
  description = undefined,
  link = { anchor: "", label: "" },
  asset = { url: "", alt: "" },
}: HeroProps) {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 lg:col-span-7 lg:px-0 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <Link
                  href="/aboutus"
                  className="whitespace-nowrap font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  <span aria-hidden="true">&rarr;</span>
                  {blog}
                </Link>
              </div>
            </div>
            <h1 className="mt-24 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl">
              {heading}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              {description}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href={link.anchor}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {link.label}
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 content-center">
          <Image
            src={asset.url}
            alt={asset.alt}
            width={1000}
            height={760}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
