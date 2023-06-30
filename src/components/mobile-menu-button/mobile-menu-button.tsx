import React, { ForwardedRef } from "react";
import { Menu } from "lucide-react";
import { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const MobileMenuButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef: ForwardedRef<HTMLButtonElement>) => (
    <Button className="md:hidden" ref={forwardedRef} {...props} variant="outline" size="icon">
      <Menu className="h-6 w-6" />
    </Button>
  ),
);

MobileMenuButton.displayName = "MobileMenuButton";

export default MobileMenuButton;
