import slugify from "slugify";
import { type HTMLAttributes } from "react";
import Title from "../Title/Title";

type HeadingTag = "h1" | "h2" | "h3" | "h4";

interface SectionHeaderProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  as?: HeadingTag;
  id?: string;
}

export function SectionHeader({
  title,
  description,
  as = "h2",
  id,
  className,
  ...rest
}: SectionHeaderProps) {
  const headingId = id ?? slugify(title, { lower: true, strict: true });

  return (
    <header
      className={`text-center space-y-4 py-4 ${className ?? ""}`}
      {...rest}
    >
      <Title id={headingId} as={as} className="typography-tertiary-xl-bold">
        {title}
      </Title>
      {description && (
        <p className="text-base font-body text-on-tertiary-container/80 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </header>
  );
}
