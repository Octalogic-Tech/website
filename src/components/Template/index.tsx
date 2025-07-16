"use client";

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
  return (
    <div className="font-montserrat p-6">
      <h1 className="mb-6 text-3xl font-bold">Design System</h1>
      <Tabs defaultValue={tabItems[0].value} className="w-full">
        <TabsList className="rounded-lg border border-white/10 bg-black p-1">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-md px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-black"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabItems.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.component}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
