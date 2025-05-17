"use client";

import { Slot } from "@radix-ui/react-slot";
import React, { forwardRef } from "react";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      asChild = false,
      variant = "default",
      size = "md",
      className = "",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const base =
      "inline-block font-body font-semibold text-sm uppercase shadow-md transition text-center cursor-pointer rounded-full";

    const variantStyles: Record<ButtonVariant, string> = {
      default: "bg-primary text-on-primary hover:scale-105 hover:shadow-lg",
      outline:
        "border border-[var(--color-outline)] text-on-surface bg-transparent hover:bg-[var(--color-tertiary-container)]",
      ghost: "bg-transparent text-primary hover:underline",
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3",
      lg: "px-8 py-3 text-base",
    };

    const combined =
      `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

    return <Comp ref={ref} className={combined} {...props} />;
  }
);

Button.displayName = "Button";
