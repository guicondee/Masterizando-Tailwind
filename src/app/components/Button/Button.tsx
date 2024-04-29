import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

const button = tv({
  base: [
    "rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-300",
    "active:opacity-80",
  ],

  variants: {
    variant: {
      primary:
        "bg-green-500 text-white hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500 ",
      outline:
        "border border-zinc-300 text-zinc-700 rounded-lg hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800 dark:text-zinc-400 ",
      ghost:
        "rounded-md px-2 hover:bg-zinc-100 shadow-none text-zinc-500 dark:hover:bg-white/5 dark:text-zinc-400",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button className={button({ variant, className })} {...props}>
      {props.children}
    </button>
  );
}
