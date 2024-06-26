import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
interface InputPrefixProps extends ComponentProps<"div"> {}

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

interface InputControlProps extends ComponentProps<"input"> {}

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="dark:placeholder:zinc-400 w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100"
      {...props}
    />
  );
}

interface InputRootProps extends ComponentProps<"div"> {}

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        "flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm",
        "focus-within:border-green-300 focus-within:ring-4 focus-within:ring-green-100",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-green-500 dark:focus-within:ring-green-300/10",
        props.className,
      )}
      {...props}
    />
  );
}
