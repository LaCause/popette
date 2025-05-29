import type { HTMLAttributes } from "react";

export default function SectionWrapper({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      role="section"
      className={`bg-background text-on-tertiary-container py-21 max-w-6xl mx-auto px-6${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </section>
  );
}
