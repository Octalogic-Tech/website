"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TypographyDemo from "./TypographyDemo";
import ButtonDemo from "./ButtonDemo";
import InputDemo from "./InputDemo";
import ColorsDemo from "./ColorsDemo";
import ImageDemo from "./ImageDemo";
import IconDemo from "./IconDemo";
import { Typography } from "@/components/ui";

const tabItems = [
  {
    label: "Typography",
    value: "typography",
    component: <TypographyDemo />,
  },
  {
    label: "Button",
    value: "button",
    component: <ButtonDemo />,
  },
  {
    label: "Input",
    value: "input",
    component: <InputDemo />,
  },
  {
    label: "Color",
    value: "color",
    component: <ColorsDemo />,
  },
  {
    label: "Image",
    value: "image",
    component: <ImageDemo />,
  },
  {
    label: "Icon",
    value: "icon",
    component: <IconDemo />,
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
      <Typography
        variant="h4"
        font="barlow-condensed"
        component="h1"
        className="mb-4"
        weight="bold"
      >
        Design System
      </Typography>
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
