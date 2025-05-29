import { ReactNode } from "react";
import Image from "next/image";

type SectionGridProps = {
  title?: ReactNode;
  content: ReactNode;
  image: {
    src: string;
    alt: string;
    className?: string;
  };
  reverse?: boolean;
  align?: "center" | "top" | "bottom";
  className?: string;
};

export function SectionGrid({
  title,
  content,
  image,
  reverse = false,
  align = "center",
  className = "",
}: SectionGridProps) {
  const alignmentClass =
    align === "top"
      ? "items-start"
      : align === "bottom"
        ? "items-end"
        : "items-center";

  return (
    <section
      className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ${alignmentClass} ${className}`}
    >
      {reverse ? (
        <>
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover object-center transition duration-300 hover:scale-105 ${image.className ?? ""}`}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div className="space-y-6">
            {title && <div>{title}</div>}
            {content}
          </div>
        </>
      ) : (
        <>
          <div className="space-y-6">
            {title && <div>{title}</div>}
            {content}
          </div>

          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover object-center transition duration-300 hover:scale-105 ${image.className ?? ""}`}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </>
      )}
    </section>
  );
}
