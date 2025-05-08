"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface SwiperProps {
  slides?: Array<{
    src?: string;
    alt?: string;
  }>;
}

export default function Carousel({
  slides = [{ src: "", alt: "" }],
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
  return (
    <div className="pt-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Celebrate the Beauty of Motherhood
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Capture timeless moments with our exclusive maternity photography
          sessions. Let us help you preserve these precious memories forever.
        </p>
        <Link
          href="/book"
          className="whitespace-nowrap font-semibold text-[#999DA0] flex gap-1.5 justify-center underline hover:no-underline"
        >
          Learn more
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
        {slides.map((slide: { src?: string; alt?: string }) => (
          <SwiperSlide className="justify-items-center" key={slide.src}>
            <Image
              src={slide.src || ""}
              alt={slide.alt || "Hero Image"}
              width={550}
              height={400}
              loading="lazy"
              className="rounded-lg"
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
