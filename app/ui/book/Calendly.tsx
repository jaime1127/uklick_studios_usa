"use client";

import { InlineWidget } from "react-calendly";

export default function Calendly() {
  return (
    <div className="h-screen">
      <InlineWidget url="https://calendly.com/pfjaime" />
    </div>
  );
}