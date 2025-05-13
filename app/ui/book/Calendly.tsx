"use client";

import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";
import { useEffect, useState } from "react";

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

  return (
    <div>
      {inline ? <InlineWidget url="https://calendly.com/pfjaime" /> : null}
      {widget && isClient ? (
        <PopupWidget
          url="https://calendly.com/pfjaime"
          text="Book now"
          color="#999DA0"
          rootElement={document.getElementById("__next") || document.body}
        />
      ) : null}
      {popup && isClient ? (
        <PopupButton
          url="https://calendly.com/pfjaime"
          text="Book now"
          rootElement={document.getElementById("__next") || document.body}
        />
      ) : null}
    </div>
  );
}
