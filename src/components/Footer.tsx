import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-20 bg-slate-800 text-white">
      <div className="container flex flex-col sm:flex-row justify-between gap-6">
        <div>
          <p className="text-lg font-semibold">Estate</p>
          <p className="max-w-lg text-slate-300 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            suscipit ad aut esse iusto consectetur consectetur perferendis quis
            in voluptates vitae dicta odit.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold">Contacts</p>
          <address className="text-slate-300">
            <MapPin className="inline-block w-5 h-5 mt-0.5" />
            123 cincity st,
            <br /> Another city USA
          </address>
        </div>
       
      </div>
    </footer>
  );
}
