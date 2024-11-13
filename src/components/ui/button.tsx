import React, { forwardRef, ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground w-full rounded-lg shadow outline-none hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-primary bg-none text-primary hover:bg-primary hover:text-card ",
        outline1:
          "border border-black rounded-xl mr-4 text-xl capitalize mt-4 outline-none",
        outline2:
          "border border-black rounded-3xl text-xl py-2 px-10 mr-6 sm:max-xl:text-lg sm:max-xl:px-5 sm:max-xl:mb-4",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost:
          "bg-secondary py-8 px-6 hover:bg-primary hover:text-white cursor-pointer",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 text-4xl",
        xs: "h-4 rounded-md px-2 py-3 text-sm",
        sm: "h-8 rounded-md px-4 py-6  text-md w-auto sm:max-xl:h-4 sm:max-xl:px-3 sm:max-xl:py-4",
        md: "h-10 rounded-md text-2xl",
        lg: "h-20 text-4xl px-10 sm:max-xl:h-10 sm:max-xl:px-4 sm:max-xl:text-xl",
        xl: "h-20 text-4xl px-20 sm:max-xl:h-10 sm:max-xl:px-5 sm:max-xl:text-xl",
        cardSize: "",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type Variant =
  | "default"
  | "destructive"
  | "outline"
  | "outline1"
  | "outline2"
  | "secondary"
  | "ghost"
  | "link";
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "cardSize" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement,ButtonProps>(
  ({ onClick, className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={onClick}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
