import Link from "next/link";
import Image from "next/image";
import { Home, Info, Settings, Mail } from "lucide-react";

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import MobileMenuButton from "@/components/mobile-menu-button/mobile-menu-button";
import HorizontalRule from "@/components/horizontal-rule/horizontal-rule";

export default function MobileMenuDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MobileMenuButton />
      </SheetTrigger>
      <SheetContent className="w-[300px]">
        <SheetHeader>
          <div className="flex flex-col justify-center items-center my-[20px]">
            <Image src="/images/logos/octalogic.svg" alt="Octalogic logo" width={80} height={80} />
            <HorizontalRule />
          </div>
        </SheetHeader>
        <nav className="mt-[20px]">
          <ul>
            <li className="mb-[16px]">
              <SheetClose asChild>
                <Link href="/" className="flex items-center gap-[24px] w-full py-[10px]">
                  <Home color="white" fill="#26A69A" className="h-8 w-8" />
                  <span>Home</span>
                </Link>
              </SheetClose>
            </li>
            <li className="mb-[16px]">
              <SheetClose asChild>
                <Link href="/about" className="flex items-center gap-[24px] w-full py-[10px]">
                  <Info color="white" fill="#26A69A" className="h-8 w-8" />
                  <span>About</span>
                </Link>
              </SheetClose>
            </li>
            <li className="mb-[16px]">
              <SheetClose asChild>
                <Link href="/services" className="flex items-center gap-[24px] w-full py-[10px]">
                  <Settings color="white" fill="#26A69A" className="h-8 w-8" />
                  <span>Services</span>
                </Link>
              </SheetClose>
            </li>
            <li className="mb-[16px]">
              <SheetClose asChild>
                <Link href="/contact" className="flex items-center gap-[24px] w-full py-[10px]">
                  <Mail color="white" fill="#26A69A" className="h-8 w-8" />
                  <span>Contact</span>
                </Link>
              </SheetClose>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
