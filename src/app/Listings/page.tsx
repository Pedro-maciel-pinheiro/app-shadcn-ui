import { Features } from "@/components/data/Features";



export default function Listings() {
  return (
    <>
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center Listing
     bg-fixed bg-no-repeat bg-cover bg-top gap-4 text-center">
      <h1 className="font-black text-6xl text-white">The list of houses we have 
      </h1>
      <p className="scroll"></p>
    </div>
     

    

     <div className="min-h-screen">
       <Features/>
     </div>
    </>
  );
}
