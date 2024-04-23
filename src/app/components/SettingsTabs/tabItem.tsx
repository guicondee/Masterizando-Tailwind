"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

export interface TabsItemProps {
  value: string;
  title: string;
  is_selected?: boolean;
}

export function TabItem({ title, value, is_selected = false }: TabsItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-green-600  data-[state=active]:text-green-600"
    >
      <span className="">{title}</span>
      {is_selected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-green-600"
        />
      )}
    </Tabs.Trigger>
  );
}
