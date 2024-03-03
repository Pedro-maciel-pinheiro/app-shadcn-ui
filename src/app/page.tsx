import { Hero } from "@/app/Home/Hero";
import { OurStory } from "@/app/Home/OurStory";
import { HomeItems } from "./Home/HomeItems";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <HomeItems />
      <Footer />
    </>
  );
}
