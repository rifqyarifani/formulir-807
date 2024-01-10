"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import LoginButton from "./LoginButton";

const NavBar = () => {
  const { data: session } = useSession();
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
              <Link href={"/arsip"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Arsip
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/dus"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Dus
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {session?.user.role === "Admin" && (
              <NavigationMenuItem>
                <NavigationMenuTrigger>Admin</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="md:w-[300px] lg:w-[300px] text-center">
                    <ListItem href="/admin/user" title="User"></ListItem>
                    <ListItem href="/admin/dus" title="Dus"></ListItem>
                    <ListItem
                      href="/admin/jenisberkas"
                      title="Jenis Berkas"
                    ></ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className=" flex justify-center items-center gap-4">
          <LoginButton />
          <ModeToggle />
        </div>
      </nav>
    </>
  );
};

export default NavBar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
