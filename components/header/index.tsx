"use client";
import React from "react";
import Link from "next/link";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ModeToggle } from "../ThemeButton";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menubar, MenubarMenu } from "@radix-ui/react-menubar";

export default function Header() {
  return (
    <div className="mx-auto px-2 h-[64px] flex justify-between items-center sm:px-20">
      <div className="flex">
        <ModeToggle />
        <div className="text-2xl ml-2 font-semibold items-center">V5</div>
      </div>
      <Sheet>
        <SheetTrigger>
          <Button size="icon" variant="outline" className="sm:hidden ml-2">
            <PanelLeft className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <SheetTitle className="text-center text-2xl">~V5~</SheetTitle>
          <SheetDescription className="text-center mb-4">
            欢迎光临我的博客
          </SheetDescription>
          <div>
            <NavigationMenu className="list-none text-2xl flex flex-col items-center space-y-4">
              <NavigationMenuItem>
                <Link href="" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-xl"
                    )}
                  >
                    首页
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-xl"
                    )}
                  >
                    关于我
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenu>
          </div>
        </SheetContent>
      </Sheet>
      <NavigationMenu className="list-none text-2xl space-x-2 hidden sm:flex">
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent text-xl"
              )}
            >
              首页
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent text-xl"
              )}
            >
              关于我
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
}
