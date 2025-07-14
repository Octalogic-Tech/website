// app/design-system/button/page.tsx
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ButtonDemoPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="p-10">
        <div className="w-fit space-y-4 rounded-md border border-dashed border-purple-500 p-4">
          <Button variant="primary" className="w-60 justify-between">
            <ArrowDown />
            GET IN TOUCH
            <ArrowDown />
          </Button>
          <Button variant="primaryOptional" className="w-60 justify-between">
            <ArrowDown />
            GET IN TOUCH
            <ArrowDown />
          </Button>
          <Button variant="secondary" className="w-60 justify-between">
            <ArrowDown />
            GET IN TOUCH
            <ArrowDown />
          </Button>
          <Button variant="text" className="w-60 justify-between">
            <ArrowDown />
            GET IN TOUCH
            <ArrowDown />
          </Button>
        </div>
      </div>
    </div>
  );
}
