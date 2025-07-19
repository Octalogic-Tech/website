"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Typography from "./TypographyDemo";
import Button from "./ButtonDemo";
import Input from "./InputDemo";
import Color from "./ColorsDemo";

const tabItems = [
  {
    label: "Typography",
    value: "typography",
    component: <Typography />,
  },
  {
    label: "Button",
    value: "button",
    component: <Button />,
  },
  {
    label: "Input",
    value: "input",
    component: <Input />,
  },
  {
    label: "Color",
    value: "color",
    component: <Color />,
  },
];

export default function DesignSystem() {
  const searchParams =
    typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const initialTab = searchParams?.get("tab") ?? tabItems[0].value;
  const [tab, setTab] = useState(initialTab);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tab);
    window.history.replaceState(null, "", url.toString());
  }, [tab]);

  return (
    <div className="font-montserrat p-6">
      <h1 className="mb-6 text-3xl font-bold">Design System</h1>
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="rounded-lg border border-white/10 bg-black p-1">
          {tabItems.map((tabItem) => (
            <TabsTrigger
              key={tabItem.value}
              value={tabItem.value}
              className="rounded-md px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-black"
            >
              {tabItem.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabItems.map((tabItem) => (
          <TabsContent key={tabItem.value} value={tabItem.value}>
            {tabItem.component}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
