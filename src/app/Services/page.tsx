"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div
        className="min-h-screen flex flex-col gap-8 justify-center items-center Services
        md:bg-fixed bg-no-repeat bg-cover bg-top "
      >
        <h1 className="font-black text-6xl text-white mt-16 md:mt-0">Services</h1>
        <div>
          <div
            className="container 
         grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <motion.div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                overflow: "hidden",
              }}
            >
              <Card
                className="shadow-2xl shadow-slate-900 border-4
          transition-transform hover:scale-105
           border-white/80 bg-black/60 text-white"
              >
                <CardHeader>
                  <CardTitle>Real Estate Listing and Marketing</CardTitle>
                  <CardDescription className="text-white">
                    Creating attractive property listings with high-quality
                    photos and detailed descriptions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    Marketing the properties through various channels, such as
                    online platforms, social media, and traditional advertising,
                    to reach a broad audience of potential buyers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                overflow: "hidden",
              }}
            >
              <Card
                className="shadow-2xl shadow-slate-900 border-4
          transition-transform hover:scale-105
           border-white/80 bg-black/60 text-white"
              >
                <CardHeader>
                  <CardTitle>Property Valuation and Appraisal</CardTitle>
                  <CardDescription className="text-white">
                    Conducting thorough property valuations to determine fair
                    market value.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    Providing appraisal services to assess the condition,
                    features, and overall worth of a property, helping clients
                    make informed buying and selling decisions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                overflow: "hidden",
              }}
            >
              <Card
                className="shadow-2xl shadow-slate-900 border-4
          transition-transform hover:scale-105
           border-white/80 bg-black/60 text-white"
              >
                <CardHeader>
                  <CardTitle>Buyer and Seller Representation</CardTitle>
                  <CardDescription className="text-white">
                    Assisting sellers in marketing their homes effectively,
                    negotiating with potential buyers. 
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    Representing buyers by helping them find suitable
                    properties, negotiating purchase terms, and guiding them
                    through the complexities of the buying process.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
