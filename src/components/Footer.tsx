import {
  GithubIcon,
  LinkedinIcon,
  MapPin,
  PhoneCallIcon,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="h-96 lg:h-80 bg-slate-800 text-white flex ">
      <div
        className="container flex flex-col
       sm:flex-row justify-around items-center gap-6 mt-4 "
      >
        <div className="">
          <p className="text-lg font-semibold italic">HH</p>
          <p className="max-w-lg text-slate-300 mt-1">
            Welcome to <strong>House Haven,</strong> where dreams find their
            address and every brick echoes the warmth of home.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mb-2">Contacts</p>
          <address className="text-slate-300">
            <MapPin className="inline-block w-5 h-5 mt-0.5" />
            123 cincity st,
            <br /> Another city USA
          </address>
          <div className="flex gap-6 mt-8">
            <Link href={"https://www.linkedin.com/in/jpmp1998/"} target="blank"  className=" hover:text-blue-500">
              <LinkedinIcon />
            </Link>
            <Link href={"https://github.com/Pedro-maciel-pinheiro"} target="blank" className=" hover:text-purple-600">
              <GithubIcon />
            </Link>
            <Link href={"https://web.whatsapp.com/send?phone=5561998516239"} target="blank" className=" hover:text-green-600">
              <PhoneCallIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );


}
