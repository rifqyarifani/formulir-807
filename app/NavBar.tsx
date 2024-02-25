"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <>
      <nav className=" flex border-b mb-5 h-14 items-center justify-between container">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={"/"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/permohonan"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Permohonan
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className=" flex justify-center items-center gap-4">
          <ModeToggle />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
