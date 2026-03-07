import slugify from "slugify";
import { type HTMLAttributes } from "react";
import Title, { TitleVariant } from "../ui/Title/Title";

type HeadingTag = "h1" | "h2" | "h3" | "h4";

interface SectionHeaderProps extends HTMLAttributes<HTMLElement> {
  title: string;
  titleVariant?: TitleVariant;
  description?: string;
  as?: HeadingTag;
  id?: string;
}

export function SectionHeader({
  title,
  description,
  as = "h2",
  id,
  titleVariant,
  className,
  ...rest
}: SectionHeaderProps) {
  const headingId = id ?? slugify(title, { lower: true, strict: true });

  return (
    <header
      className={`text-center space-y-4 py-4 ${className ?? ""}`}
      {...rest}
    >
      <Title id={headingId} as={as} variant={titleVariant} size="xl">
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
