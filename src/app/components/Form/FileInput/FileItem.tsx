import { CheckCircle2, Trash2, UploadCloud } from "lucide-react";
import { Button } from "../../Button/Button";
import { formatBytes } from "@/app/utils/format-bytes";
import { tv, VariantProps } from "tailwind-variants";

const fileItem = tv({
  slots: {
    container:
      "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",
    icon: "rounded-full border-4 border-green-50 bg-green-100 p-2 text-green-600",
    deleteButton: "",
  },

  variants: {
    state: {
      progress: {
        container: "",
        icon: "",
      },
      error: {
        container: "bg-error-25 border-error-300",
        icon: "border-error-50 bg-error-100 text-error-600",
        deleteButton: "text-error-700 hover:text-error-900 hover:bg-error-50",
      },
      completed: {
        container: "border-green-500",
        icon: "",
      },
    },
  },

  defaultVariants: {
    state: "progress",
  },
});

export interface FileInputProps extends VariantProps<typeof fileItem> {
  name: string;
  size: number;
}

export function FileItem({ name, size, state }: FileInputProps) {
  const { container, icon, deleteButton } = fileItem({ state });
  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === "error" ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700">
              Upload failed, please try again.
            </span>
            <span className="text-sm text-error-600">{name}</span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900"
          >
            try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1 ">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-green-600"
                style={{ width: state === "completed" ? "100%" : "80%" }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === "completed" ? "100%" : "80%"}
            </span>
          </div>
        </div>
      )}

      {state === "completed" ? (
        <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
