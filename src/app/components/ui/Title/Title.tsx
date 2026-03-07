import { ReactNode } from "react";

type TitleSize = "sm" | "md" | "lg" | "xl";
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TitleVariant = "primary" | "secondary" | "tertiary";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: TitleSize;
  as?: HeadingTag;
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: TitleVariant;
}

const sizeClasses: Record<TitleVariant, Record<TitleSize, string>> = {
  primary: {
    sm: "typography-primary-s",
    md: "typography-primary-m",
    lg: "typography-primary-l",
    xl: "typography-primary-xl",
  },
  secondary: {
    sm: "typography-secondary-s",
    md: "typography-secondary-m",
    lg: "typography-secondary-l",
    xl: "typography-secondary-xl",
  },
  tertiary: {
    sm: "typography-tertiary-s",
    md: "typography-tertiary-m",
    lg: "typography-tertiary-l",
    xl: "typography-tertiary-xl",
  },
};

export default function Title({
  size = "md",
  variant = "secondary",
  as: Tag = "h1",
  children,
  className = "",
  ...props
}: TitleProps) {
  const baseClasses = "tracking-widest text-primary";
  const classes = `${sizeClasses[variant][size]} ${baseClasses} ${className}`;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
