"use client";

interface VideoProps {
  videoAsset?: {
    asset?: {
      alt?: string;
      size?: number;
      url?: string | null;
      handle?: string;
    };
  };
}

export default function Video({
  videoAsset = {
    asset: {
      alt: "",
      size: 0,
      url: null,
      handle: "",
    },
  },
}: VideoProps) {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={videoAsset.asset?.url || ''} type="video/mp4" />
    </video>
  );
}
