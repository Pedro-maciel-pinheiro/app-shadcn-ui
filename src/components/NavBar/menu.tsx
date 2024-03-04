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
             bg-transparent  transition-all 
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
                <Button className="w-72 text-end bg-white border-2 border-black">
                  <p className="ml-auto text-black font-semibold text-xl ">Home</p>
                </Button>
              </Link>

              <Link href={"/Listings"}>
                <Button className="w-72 border-2 border-black bg-slate-50 ">
                  <p className="ml-auto text-black font-semibold text-xl " >Listings</p>
                </Button>
              </Link>
              <Link href={"/Services"}>
                <Button className="w-72 border-2 border-black bg-slate-50 ">
                  <p className="ml-auto text-black font-semibold text-xl " >Services</p>
                </Button>
              </Link>
              <Link href={"/Aboutus"}>
                <Button className="w-72 border-2 border-black bg-slate-50 ">
                  <p className="ml-auto text-black font-semibold text-xl " >About us</p>
                </Button>
              </Link>
              <Link href={"/Contact"}>
                <Button className="w-72 border-2 border-black bg-slate-50 ">
                  <p className="ml-auto text-black font-semibold text-xl " >Contact</p>
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
      <button
        className=" flex md:hidden h-11 items-center z-50 
        justify-center bg-white fixed  w-16  "
        onClick={() => setMobileNavOpen((prev) => !prev)}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
        
      </button>

      
    </div>
  );
}
