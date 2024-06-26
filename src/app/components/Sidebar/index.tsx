"use client";

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
  Menu,
  Search,
  Users,
} from "lucide-react";
import { UsedSpaceWidget } from "./usedSpaceWidget";
import { Profile } from "./profile";
import { InputControl, InputPrefix, InputRoot } from "../Form/Input/input";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "../Button/Button";

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r  lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
      {" "}
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
        forceMount
      >
        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

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

          <div className="h-px bg-zinc-200 dark:bg-zinc-700"></div>
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
