"use client";

interface SEOJsonLdProps {
  json: Record<string, unknown>;
}

export const SEOJsonLd = ({ json }: SEOJsonLdProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
};
