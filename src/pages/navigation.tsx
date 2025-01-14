"use client";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ModeToggle } from "@/components/ModeToggle";
// import { Icons } from "@/components/icons"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { X, Menu } from "lucide-react";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  //   NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  //   NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MenuListItems = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Case studies", link: "/case-studies" },
  { name: "Blog", link: "/blog" },
  { name: "Contact us", link: "/contact" },
  { name: "Careers", link: "/careers" },
];

export default function Navigation() {
  const languages = ["EN", "FR", "DE", "ES"];
  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0]);

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavbar = () => {
    console.log("isOpen");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex h-[72px] max-h-[72px] w-full flex-row items-center justify-between px-8 shadow-sm">
        {/* Logo Section */}
        <div className="flex h-full flex-1 items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            octalogic
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="hidden flex-1 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {MenuListItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={item.link} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Section: Language Selector and Button */}
        <div className="flex h-full flex-1 flex-row items-center justify-end space-x-4">
          <div className="relative px-5">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="border-gray-2 rounded-full border px-3 py-1 text-sm text-gray-700 focus:outline-none"
            >
              {languages.map((lang, index) => (
                <option key={index} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          {/* Get in Touch Button */}
          <Button variant="custom" asChild className="hidden rounded-full md:flex">
            <Link href="/get-in-touch">GET IN TOUCH</Link>
          </Button>
        </div>

        {/* mobile view */}
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {/* {isOpen && (
        <div className="hidden flex-1 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {MenuListItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href="/" passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                      {item}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )} */}
    </>
  );
}

// const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
//   ({ className, title, children, ...props }, ref) => {
//     return (
//       <li>
//         <NavigationMenuLink asChild>
//           <a
//             ref={ref}
//             className={cn(
//               "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//               className,
//             )}
//             {...props}
//           >
//             <div className="text-sm font-medium leading-none">{title}</div>
//             <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
//           </a>
//         </NavigationMenuLink>
//       </li>
//     );
//   },
// );
// ListItem.displayName = "ListItem";
