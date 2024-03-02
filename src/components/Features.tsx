import { PropertyCart } from "./PropertyCard";

export const PropertiesList = [
  {
    id: "pro-1",
    name: "127 Main St, Somewhere USA",
    price: 1500,
    rating: 4,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/imgs/image-1.jpg",
  },
  {
    id: "pro-2",
    name: "123 Oak Ave, Yourcity USA",
    price: 2000,
    rating: 5,
    sqft: 400,
    beds: 4,
    baths: 3,
    image: "/imgs/image-2.jpg",
  },
  {
    id: "pro-3",
    name: "456 Pine Blvd, Othercity USA",
    price: 1800,
    rating: 4.5,
    sqft: 350,
    beds: 3,
    baths: 2,
    image: "/imgs/image-3.jpg",
  },
  {
    id: "pro-4",
    name: "789 Elm St, Anothercity USA",
    price: 2200,
    rating: 4.2,
    sqft: 450,
    beds: 4,
    baths: 3,
    image: "/imgs/image-4.jpg",
  },
  {
    id: "pro-5",
    name: "101 Maple Ave, Newcity USA",
    price: 1700,
    rating: 4.8,
    sqft: 320,
    beds: 3,
    baths: 2,
    image: "/imgs/image-5.jpg",
  },
  {
    id: "pro-6",
    name: "222 Birch Blvd, Nextcity USA",
    price: 1900,
    rating: 4.3,
    sqft: 380,
    beds: 3,
    baths: 2,
    image: "/imgs/image-6.jpg",
  },
  {
    id: "pro-7",
    name: "333 Cedar St, Lastcity USA",
    price: 2100,
    rating: 4.6,
    sqft: 420,
    beds: 4,
    baths: 3,
    image: "/imgs/image-7.jpg",
  },
  {
    id: "pro-8",
    name: "444 Walnut Ave, Futurecity USA",
    price: 1600,
    rating: 4.9,
    sqft: 290,
    beds: 2,
    baths: 1,
    image: "/imgs/image-8.jpg",
  },
  {
    id: "pro-9",
    name: "555 Pine St, Pastcity USA",
    price: 2000,
    rating: 4.7,
    sqft: 400,
    beds: 3,
    baths: 2,
    image: "/imgs/image-9.jpg",
  },
  {
    id: "pro-10",
    name: "667 Oak Blvd, Oldcity USA",
    price: 2300,
    rating: 4.4,
    sqft: 480,
    beds: 4,
    baths: 3,
    image: "/imgs/image-10.jpg",
  },
];

export function Features() {
  return (
    <div className="container pb-20">
      <h3 className="text-4xl text-center mb-2">Featured Properties</h3>
      <p className="text-center text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas iste
        pariatur nobis nesciunt, nihil sed laudantium?
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {PropertiesList.map((property) => (
          <PropertyCart {...property} />
        ))}
      </div>
    </div>
  );
}
