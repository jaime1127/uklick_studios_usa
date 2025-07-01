"use client";

import React from "react";
import { RichText as HygraphRichText } from "@graphcms/rich-text-react-renderer";

interface RichTextProps {
  content?: any;
}

export default function RichText({ content }: RichTextProps) {
  if (!content) return null;
  return (
    <div className="prose prose-pretty max-w-none">
      <HygraphRichText
        content={content}
        renderers={{
          h1: ({ children }) => (
            <h1 className="text-xl/8 text-gray-600">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">{children}</h2>
          ),
          p: ({ children }) => (
            <p className="text-xl/8 text-gray-600 mt-6">{children}</p>
          ),
        }}
      />
    </div>
  );
}
