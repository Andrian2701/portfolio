'use client'

import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

import { Navbar } from './navbar';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export const DrawerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerClose = () => setIsDrawerOpen(false)

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger className="text-2xl sm:hidden text-text-secondary hover:text-text-hover cursor-pointer">
        <LuMenu aria-label="Open menu" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="sr-only">Navigation menu</DrawerTitle>
        <DrawerClose className="fixed top-4 right-4 text-2xl text-text-secondary hover:text-text-hover cursor-pointer">
          <IoCloseOutline aria-label="Close menu" />
        </DrawerClose>
        <Navbar isMobileView handleDrawerClose={handleDrawerClose} />
      </DrawerContent>
    </Drawer>
  );
};
