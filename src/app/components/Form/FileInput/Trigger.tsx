"use client";

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export function Trigger() {
  const { id } = useFileInput();

  return (
    <label
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-green-200 hover:bg-green-25 hover:text-green-500 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-green-300"
      htmlFor={id}
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-green-50 group-hover:bg-green-100 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-green-500 dark:text-zinc-500 dark:group-hover:text-green-300" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-green-600 dark:text-green-300">
            Click to upload
          </span>{" "}
          or drag and drop
        </span>
        <span className="text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
}
