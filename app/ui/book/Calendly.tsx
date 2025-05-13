"use client";

import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";

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
  return (
    <div>
      {inline ? <InlineWidget url="https://calendly.com/pfjaime" /> : null}
      {widget && document ? (
        <PopupWidget
          url="https://calendly.com/pfjaime"
          text="Book now"
          color="#999DA0"
          rootElement={document.getElementById("__next") || document.body}
        />
      ) : null}
      {popup && document ? (
        <PopupButton
          url="https://calendly.com/pfjaime"
          text="Book now"
          rootElement={document.getElementById("__next") || document.body}
        />
      ) : null}
    </div>
  );
}
