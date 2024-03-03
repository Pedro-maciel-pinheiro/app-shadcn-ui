import HoverCard from "@/components/Card/CardMotion";
import { ArrowRightSquareIcon } from "lucide-react";

export function HomeItems() {
  return (
    <div className="container hidden lg:grid grid-cols-2 justify-center items-center  mb-28 border-t">
      <div className="">
        <h1 className="font-semibold mb-4 text-2xl flex items-center  gap-4">Look what we can offer <ArrowRightSquareIcon size={20}/> </h1>
        <p className="text-muted-foreground">
          Experience unparalleled luxury and comfort in this exquisite
          residence, featuring spacious living areas, modern amenities, and
          breathtaking views. This meticulously crafted home boasts a harmonious
          blend of elegance and functionality. With its prime location,
          
          proximity to renowned schools, and state-of-the-art facilities, this
          property offers the epitome of contemporary living  
          
          
        </p>
      </div>
      <div className="hidden lg:block">
        <HoverCard />
      </div>
    </div>
  );
}
