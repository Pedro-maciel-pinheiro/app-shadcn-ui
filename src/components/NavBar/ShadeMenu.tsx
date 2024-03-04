"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function ShadeMenu() {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <div>
      <Sheet>
        <SheetTrigger className="block sm:hidden">
          <div className=" text-slate-900 border-2 rounded-xl bg-white">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[250px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-10 mt-8 ">
                <Link href={"/"}>
                  <Button className="w-full">Home</Button>
                </Link>

                <Link href={"/Listings"}>
                  <Button className="w-full ">Listings</Button>
                </Link>
                <Link href={"/Services"}>
                  <Button className="w-full ">Services</Button>
                </Link>
                <Link href={"/Aboutus"}>
                  <Button className="w-full ">About us</Button>
                </Link>
                <Link href={"/Contact"}>
                  <Button className="w-full ">Contact</Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
