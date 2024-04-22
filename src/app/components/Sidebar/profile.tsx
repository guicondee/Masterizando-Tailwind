import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/guicondee.png"
        alt="Imagem de perfil do usuário"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex w-full flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Guilherme Condé
        </span>
        <p className="truncate text-sm text-zinc-500">
          guilherme.dev@gmail.com
        </p>
      </div>

      <button
        type="button"
        className="ml-auto rounded-lg p-2 hover:bg-zinc-100"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}
