"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Dialog from "../Dialog/Dialog";

interface SwiperProps {
  heading?: string | undefined | null;
  description?: string | undefined | null;
  slides?:
    | {
        image?:
          | {
              url?: string | undefined | null;
              alt?: string | undefined | null;
            }
          | undefined
          | null;
      }[]
    | undefined
    | null;
  link?:
    | {
        anchor?: string | undefined | null;
        label?: string | undefined | null;
      }
    | undefined
    | null;
}

export default function Carousel({
  heading = "",
  description = "",
  link = { anchor: "", label: "" },
  slides = [{ image: { url: "", alt: "" } }],
}: SwiperProps) {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{ url?: string; alt?: string }>({});

  function handleDialog(url: string, alt: string) {
    setSelected({ url, alt });
    setOpen(true);
  }

  return (
    <div className="pt-6 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">{heading}</h2>
        <p className="text-lg text-gray-600 mt-2">{description}</p>
        <Link
          href={link?.anchor || "#"}
          className="whitespace-nowrap font-semibold text-indigo-600 flex gap-1.5 justify-center underline hover:no-underline"
        >
          {link?.label}
        </Link>
      </div>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // Show 1 slide for screens smaller than 640px
          },
          768: {
            slidesPerView: 2, // Show 2 slides for screens 768px and above
          },
        }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {slides?.map((slide, idx) => (
          <SwiperSlide
            className="justify-items-center"
            key={slide?.image?.url || idx}
          >
            <Image
              src={slide?.image?.url || ""}
              alt={slide?.image?.alt || "Hero Image"}
              width={550}
              height={400}
              loading="lazy"
              className="rounded-lg"
              onClick={() =>
                handleDialog(slide?.image?.url || "", slide?.image?.alt || "")
              }
            />
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <Dialog
        open={open}
        onClose={setOpen}
        url={selected.url}
        alt={selected.alt}
      />
      <style jsx>{`
        .autoplay-progress {
          position: absolute;
          right: 16px;
          bottom: 16px;
          z-index: 10;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #999da0;
        }

        .autoplay-progress svg {
          --progress: 0;
          position: absolute;
          left: 0;
          top: 0px;
          z-index: 10;
          width: 100%;
          height: 100%;
          stroke-width: 4px;
          stroke: #999da0;
          fill: none;
          stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
          stroke-dasharray: 125.6;
          transform: rotate(-90deg);
        }
      `}</style>
    </div>
  );
}
