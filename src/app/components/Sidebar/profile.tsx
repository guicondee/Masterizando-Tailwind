import { LogOut } from "lucide-react";
import { Button } from "../Button/Button";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
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

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
}
