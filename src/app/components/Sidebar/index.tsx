import { NavItem } from "./navItem";
import { Logo } from "./logo";
import {
  BarChart2,
  CheckSquare,
  Cog,
  Flag,
  Home,
  Layers3,
  LifeBuoy,
  Search,
  Users,
} from "lucide-react";
import { UsedSpaceWidget } from "./usedSpaceWidget";
import { Profile } from "./profile";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6  border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <div>
          <Search className="h-5 w-5 text-zinc-500" />
        </div>
        <input
          className=" w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>

      <nav className="space-y-0.5 ">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart2} />
        <NavItem title="Projects" icon={Layers3} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200"></div>
        <Profile />
      </div>
    </aside>
  );
}
