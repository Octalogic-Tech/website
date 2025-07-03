// "use client";

// // import { ModeToggle } from "@/components/ModeToggle";
// // import Link from "next/link";

// import { X, Menu } from "lucide-react";
// import * as React from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import {
//   NavigationMenu,
//   //   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   //   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// const MenuListItems = [
//   { name: "Home", link: "/" },
//   { name: "About us", link: "/about" },
//   { name: "Services", link: "/services" },
//   { name: "Portfolio", link: "/portfolio" },
//   { name: "Case studies", link: "/case-studies" },
//   { name: "Blog", link: "/blog" },
//   { name: "Contact us", link: "/contact" },
//   { name: "Careers", link: "/careers" },
// ];

// export default function Navigation() {
//   const languages = ["EN", "FR", "DE", "ES"];
//   const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0]);
//   const [activeLink, setActiveLink] = React.useState("/");
//   const [isOpen, setIsOpen] = React.useState(false);

//   //to know if the hamburger icon is open or not
//   const toggleNavbar = () => {
//     // console.log("isOpen");
//     setIsOpen(!isOpen);
//   };

//   //to set the styling for active links
//   const handleLinkClick = (link: string) => {
//     setActiveLink(link);
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <nav className="flex h-[72px] max-h-[72px] w-full flex-row items-center justify-between border-b px-8">
//         {/* Logo Section */}
//         <div className="flex h-full flex-1 items-center">
//           <a href="/" className="text-xl font-bold text-blue-600">
//             octalogic
//           </a>
//         </div>

//         {/* Navigation Items */}
//         <div className="hidden flex-1 md:flex">
//           <NavigationMenu>
//             <NavigationMenuList>
//               {MenuListItems.map((item, index) => (
//                 <NavigationMenuItem key={index}>
//                   <NavigationMenuLink
//                     asChild
//                     className={cn(
//                       navigationMenuTriggerStyle(),
//                       `${activeLink === item.link ? "border-b border-[#424242] text-accent-foreground" : ""}`,
//                     )}
//                   >
//                     <a href={item.link} onClick={() => handleLinkClick(item.link)}>
//                       {item.name}
//                     </a>
//                   </NavigationMenuLink>
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         {/* Right Section: Language Selector and Button */}
//         <div className="flex h-full flex-1 flex-row items-center justify-end space-x-4">
//           <div className="relative px-5">
//             <select
//               value={selectedLanguage}
//               onChange={(e) => setSelectedLanguage(e.target.value)}
//               className="border-gray-2 rounded-full border px-3 py-1 text-sm text-gray-700 focus:outline-none"
//             >
//               {languages.map((lang, index) => (
//                 <option key={index} value={lang}>
//                   {lang}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Get in Touch Button */}
//           <Button variant="custom" asChild className="hidden rounded-full md:flex">
//             <a href="/get-in-touch">GET IN TOUCH</a>
//           </Button>
//         </div>

//         {/* mobile view */}
//         <div className="md:hidden">
//           <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
//         </div>
//       </nav>
//       {/* Mobile Navigation Menu */}
//       {isOpen && (
//         <div className="fixed left-0 top-[72px] z-40 flex h-[calc(100vh-72px)] w-full flex-col bg-white md:hidden">
//           {/* Scrollable Menu Items */}
//           <div className="flex flex-1 flex-col space-y-6 overflow-y-auto p-8">
//             {MenuListItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.link}
//                 className={`text-left font-medium text-[#424242]/50 transition-colors hover:text-[#424242] ${
//                   activeLink === item.link ? "text-[#424242]" : ""
//                 }`}
//                 onClick={() => handleLinkClick(item.link)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           {/* Fixed Bottom Button */}
//           <div className="flex w-full justify-center border-t p-4">
//             <Button
//               variant="custom"
//               asChild
//               className="w-[90%] max-w-[400px] rounded-full bg-teal-400"
//             >
//               <a href="/get-in-touch" className="block py-3 text-center">
//                 GET IN TOUCH
//               </a>
//             </Button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
