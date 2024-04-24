"use client";

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export function Trigger() {
  const { id } = useFileInput();

  return (
    <label
      className="hover:bg-green-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-green-200 hover:text-green-500"
      htmlFor={id}
    >
      <div className="border-6 rounded-full border-zinc-50 bg-zinc-100 p-2 group-hover:border-green-50 group-hover:bg-green-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-green-500" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-green-600">Click to upload</span>{" "}
          or drag and drop
        </span>
        <span className="text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
}
