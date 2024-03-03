import { Features } from "@/components/data/Features";



export default function Listings() {
  return (
    <>
    <div className="min-h-screen flex justify-center items-center Listing
     bg-fixed bg-no-repeat bg-cover bg-top">
      <h1 className="font-black text-6xl text-white">The list of houses we have</h1>
    </div>
     

    

     <div className="min-h-screen">
       <Features/>
     </div>
    </>
  );
}
