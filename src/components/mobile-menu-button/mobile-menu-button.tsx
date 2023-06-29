import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function MobileMenuButton() {
  return (
    <Button className="md:hidden" variant="outline" size="icon">
      <Menu className="h-4 w-4" />
    </Button>
  );
}
