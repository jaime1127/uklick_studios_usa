"use client";

import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface CollectionProps {
  inline?: boolean;
  widget?: boolean;
  popup?: boolean;
}

export default function Calendly({
  inline = false,
  widget = false,
  popup = false,
}: CollectionProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client side
  }, []);

  const pathname = usePathname();
  return (
    <div>
      {inline ? (
        <InlineWidget
          url="https://calendly.com/pfjaime"
          pageSettings={{ hideGdprBanner: true }}
        />
      ) : null}
      {widget && pathname !== "/book" && isClient ? (
        <PopupWidget
          url="https://calendly.com/pfjaime"
          text="Book now"
          color="oklch(51.1% .262 276.966)"
          rootElement={document.getElementById("__next") || document.body}
        />
      ) : null}
      {popup && pathname !== "/book" && isClient ? (
        <PopupButton
          url="https://calendly.com/pfjaime"
          text="Book now"
          rootElement={document.getElementById("__next") || document.body}
        />
      ) : null}
    </div>
  );
}
