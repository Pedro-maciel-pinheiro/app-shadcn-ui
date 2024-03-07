import React from "react";
import { PopUp } from "./popup";
import { ShadeMenu } from "@/components/NavBar/ShadeMenu";

export default function Contact() {
  return (
    <div
      className="min-h-screen flex justify-center items-center Contact
      md:bg-fixed bg-no-repeat bg-cover bg-top"
    >
      <div className=" flex flex-col">
        <h1 className="font-black text-6xl text-white text-center">Contact</h1>
        <div className=" bg-white"></div>
          <PopUp/>
          
      </div>
    </div>
  );
}
