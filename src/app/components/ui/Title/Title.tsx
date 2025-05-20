import { ReactNode } from "react";

type TitleSize = "sm" | "md" | "lg" | "xl";
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: TitleSize;
  as?: HeadingTag;
  children: ReactNode;
  className?: string;
  id?: string;
}

const sizeClasses: Record<TitleSize, string> = {
  sm: "typography-secondary-s-bold",
  md: "typography-secondary-m-bold",
  lg: "typography-secondary-l-bold",
  xl: "typography-secondary-xl-bold",
};

export default function Title({
  size = "md",
  as: Tag = "h1",
  children,
  className = "",
  ...props
}: TitleProps) {
  const baseClasses = "tracking-widest text-primary";
  const classes = `${sizeClasses[size]} ${baseClasses} ${className}`;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
