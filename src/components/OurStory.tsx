import Image from "next/image";
import { Button } from "./ui/button";

export function OurStory() {
  return (
    <div
      className="container pt-20 pb-36 grid lg:grid-cols-2 
        gap-10"
    >
      <div>
        <div className="relative h-fit w-fit">
          <Image
            src={"/imgs/home.jpg"}
            alt="home-pic"
            width={400}
            height={400}
            className="object-cover"
          />
          <Image
            src={"/imgs/image-2.jpg"}
            alt="home-pic"
            width={250}
            height={250}
            className="absolute top-1/2 left-1/2 border-4 object-cover hidden lg:block"
          />
        </div>
      </div>
      <div>
        <p className="font-semibold mb-1">Our  Story</p>
        <p className="text-3xl mb-2"> Effeciency. Transparency. Control</p>
        <p className="text-muted-foreground mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque odit error, cum sed omnis cupiditate quas eum quia voluptates voluptatum eaque maxime totam aut culpa sit
        Cumque odit error, cum sed omnis cupiditate quas eum quia voluptates voluptatum eaque maxime totam aut culpa sit  pariatur deserunt placeat blanditiis.</p>

        <Button>
            Read more
        </Button>
      </div>
    </div>
  );
}
