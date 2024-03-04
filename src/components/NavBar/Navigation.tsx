"use client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { Menu } from "./menu";
import { ShadeMenu } from "./ShadeMenu";


const navList = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Listings",
    href: "/Listings",
  },
  {
    title: "Services",
    href: "/Services",
  },
  {
    title: "About-us",
    href: "/Aboutus",
  },
  {
    title: "Contact",
    href: "/Contact",
  },
];

export function Navigation() {
  return (
    <>
       <div className="absolute z-40">
       <ShadeMenu/>
       </div>
      

      <nav className="fixed w-screen px-4 top-2 z-30 hidden sm:block">
        <div className="py-3 container flex items-center justify-around bg-background rounded-md z-50">
          <div className="absolute left-0 ml-5"></div>
          <p className="font-semibold italic text-2xl ">HH</p>
          <ul className="flex items-center gap-4">
            {navList.map((nav) => {
              return (
                <li
                  className="text-muted-foreground 
              hover:text-primary hover:underline"
                  key={nav.title}
                >
                  <Link href={nav.href}>{nav.title}</Link>
                </li>
              );
            })}
          </ul>

          <div>
            <Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Avatar>
          </div>
        </div>
      </nav>
    </>
  );
}
