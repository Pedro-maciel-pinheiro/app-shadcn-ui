"use client";

import Link from "next/link";
import { useState } from "react";

import { Twirl as Hamburger } from "hamburger-react";

export function Menu() {
  const [isOpen, setOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div>
      <button
        className=" flex md:hidden h-11 items-center justify-center"
        onClick={() => setMobileNavOpen((prev) => !prev)}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </button>

      {mobileNavOpen && (
        <>
          <div
            onClick={() => setMobileNavOpen(true)}
            className=" flex sm:hidden gap-8 max-w-xl items-center justify-center
             bg-white/80  transition-all border-2
        mt-2 rounded-xl   absolute z-10 font-semibold w-full
        "
          >
            <p>home</p>
            <p>home</p>
            <p>home</p>
            <p>home</p>
            <p>home</p>
          </div>
        </>
      )}
    </div>
  );
}
