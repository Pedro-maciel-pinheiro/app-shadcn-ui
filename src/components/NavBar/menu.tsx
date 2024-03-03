"use client";

import Link from "next/link";
import { useState } from "react";

import { Twirl as Hamburger } from "hamburger-react";
import { Button } from "../ui/button";

export function Menu() {
  const [isOpen, setOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div className="">
      {mobileNavOpen && (
        <>
          <div
            className=" flex sm:hidden gap-8 max-w-xl items-center justify-center
             bg-white/80  transition-all border-2
        mt-2 rounded-xl   z-50 font-semibold w-full -translate-x-64
        translate-y-10 fixed
        "
          >
            <div
              className=" flex flex-col  justify-end items-end text-end ml-auto  
               gap-2 
            "
              onClick={() => setMobileNavOpen(false)}
            >
              <Link href={"/"}>
                <Button className="w-72 text-end">
                  <p className="ml-auto">Home</p>
                </Button>
              </Link>

              <Link href={"/Listings"}>
                <Button className="w-72">
                  <p className="ml-auto" >Listings</p>
                </Button>
              </Link>
              <Link href={"/Services"}>
                <Button className="w-72">
                  <p className="ml-auto" >Services</p>
                </Button>
              </Link>
              <Link href={"/Aboutus"}>
                <Button className="w-72">
                  <p className="ml-auto" >About us</p>
                </Button>
              </Link>
              <Link href={"/Contact"}>
                <Button className="w-72">
                  <p className="ml-auto" >Contact</p>
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
      <button
        className=" flex md:hidden h-11 items-center z-50 
        justify-center bg-slate-900 fixed  rounded-xl "
        onClick={() => setMobileNavOpen((prev) => !prev)}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
        
      </button>

      
    </div>
  );
}
