import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, PhoneCallIcon } from "lucide-react";

export function PopUp() {
  return (
    <div className="">
      <Drawer>
        <DrawerTrigger className="bg-black w-52 rounded-sm border
         text-white  md:block animate-bounce mt-8 mx-auto">
          Open
        </DrawerTrigger>
        <DrawerContent>
          <DrawerTitle className="text-center text-3xl mb-8">
            This is our location
          </DrawerTitle>
          <DrawerHeader className="flex flex-col  sm:justify-around items-center">
            <DrawerDescription className="">
              <iframe
                width="930"
                height="450"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.3120234373865!2d-9.1393!3d38.7223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19346660f7591b%3A0xa33a07db772d786a!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2sus!4v1645872333131!5m2!1sen!2sus"
              ></iframe>
            </DrawerDescription>
            <DrawerDescription>
              <div className="text-xl ">
                <p>
                  Praça do Comércio <br /> 1100-148 <br />
                  Lisbon Portugal
                </p>

                <div className="flex gap-6 mt-8 items-center justify-center">
                  <Link
                    href={"https://www.linkedin.com/in/jpmp1998/"}
                    target="blank"
                    className=" hover:text-blue-500"
                  >
                    <LinkedinIcon />
                  </Link>
                  <Link
                    href={"https://github.com/Pedro-maciel-pinheiro"}
                    target="blank"
                    className=" hover:text-purple-600"
                  >
                    <GithubIcon />
                  </Link>
                  <Link
                    href={"https://web.whatsapp.com/send?phone=5561998516239"}
                    target="blank"
                    className=" hover:text-green-600"
                  >
                    <PhoneCallIcon />
                  </Link>
                </div>
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Link
              href={"https://maps.app.goo.gl/uRKypyKtcwkJSYvV8"}
              target="blank"
              className="mx-auto"
            >
              <Button className="w-96 ">Full Screen</Button>
            </Link>
            <DrawerClose>
              <Button className="w-96 bg-slate-300" variant="outline">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
