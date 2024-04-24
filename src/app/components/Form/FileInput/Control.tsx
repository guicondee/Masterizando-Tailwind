"use client";

import { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./Root";

export interface ControlProps extends ComponentProps<"input"> {}

export function Control(props: ControlProps) {
  const { id, onFilesSelected } = useFileInput();

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return;
    }

    const files = Array.from(event.target.files);
    onFilesSelected(files);
  }

  return (
    <input
      onChange={handleFilesSelected}
      type="file"
      className="sr-only"
      id={id}
      {...props}
    />
  );
}
