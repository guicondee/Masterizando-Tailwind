"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./tabItem";
import { useState } from "react";

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("Tab-01");

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="Tab-01"
          title="Details"
          is_selected={currentTab === "Tab-01"}
        />
        <TabItem
          value="Tab-02"
          title="Profile"
          is_selected={currentTab === "Tab-02"}
        />
        <TabItem
          value="Tab-03"
          title="Password"
          is_selected={currentTab === "Tab-03"}
        />
        <TabItem
          value="Tab-04"
          title="Team"
          is_selected={currentTab === "Tab-04"}
        />
        <TabItem
          value="Tab-05"
          title="Plan"
          is_selected={currentTab === "Tab-05"}
        />
        <TabItem
          value="Tab-06"
          title="Billing"
          is_selected={currentTab === "Tab-06"}
        />
        <TabItem
          value="Tab-07"
          title="E-mail"
          is_selected={currentTab === "Tab-07"}
        />
        <TabItem
          value="Tab-08"
          title="Notifications"
          is_selected={currentTab === "Tab-08"}
        />
        <TabItem
          value="Tab-09"
          title="Integrations"
          is_selected={currentTab === "Tab-09"}
        />
        <TabItem
          value="Tab-10"
          title="API"
          is_selected={currentTab === "Tab-10"}
        />
      </Tabs.List>
    </Tabs.Root>
  );
}
