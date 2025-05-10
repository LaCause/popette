import { ReactNode } from "react";

type TitleSize = "sm" | "md" | "lg" | "xl";
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  size?: TitleSize;
  as?: HeadingTag;
  children: ReactNode;
  className?: string;
  id?: string;
}

const sizeClasses: Record<TitleSize, string> = {
  sm: "typography-tertiary-s-bold",
  md: "typography-tertiary-m-bold",
  lg: "typography-tertiary-l-bold",
  xl: "typography-tertiary-xl-bold",
};

export default function Title({
  size = "md",
  as: Tag = "h1",
  children,
  className = "",
}: TitleProps) {
  const baseClasses = "tracking-widest text-primary";
  const classes = `${sizeClasses[size]} ${baseClasses} ${className}`;

  return <Tag className={classes}>{children}</Tag>;
}
