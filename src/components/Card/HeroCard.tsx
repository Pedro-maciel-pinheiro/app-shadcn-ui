// "use client"

// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const ShuffleHero = () => {
//   return (
//     <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
//       <div>
        
//         <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
//           Check out
//         </button>
//       </div>
//       <ShuffleGrid />
//     </section>
//   );
// };

// const shuffle = (array: (typeof squareData)[0][]) => {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

// const squareData = [
//   {
//     id: 1,
//     src: "./imgs/image-1.jpg",
//   },
//   {
//     id: 2,
//     src: "./imgs/image-2.jpg",
//   },
//   {
//     id: 3,
//     src: "./imgs/image-3.jpg",
//   },
//   {
//     id: 4,
//     src: "./imgs/image-4.jpg",
//   },
//   {
//     id: 5,
//     src: "./imgs/image-5.jpg",
//   },
//   {
//     id: 6,
//     src: "./imgs/image-6.jpg",
//   },
//   {
//     id: 7,
//     src: "./imgs/image-7.jpg",
//   },
//   {
//     id: 8,
//     src: "./imgs/image-8.jpg",
//   },
//   {
//     id: 9,
//     src: "./imgs/image-9.jpg",
//   },
//   {
//     id: 10,
//     src: "./imgs/image-10.jpg",
//   },
//   {
//     id: 11,
//     src: "./imgs/image-11.jpg",
//   },
//   {
//     id: 12,
//     src: "./imgs/image-12.jpg",
//   },
//   {
//     id: 13,
//     src: "./imgs/image-13.jpg",
//   },
//   {
//     id: 14,
//     src: "./imgs/image-14.jpg",
//   },
//   {
//     id: 15,
//     src: "./imgs/image-15.jpg",
//   },
//   {
//     id: 16,
//     src: "./imgs/image-16.jpg",
//   },

// ];

// const generateSquares = () => {
//   return shuffle(squareData).map((sq) => (
//     <motion.div
//       key={sq.id}
//       layout
//       transition={{ duration: 1.5, type: "spring" }}
//       className="w-full h-full"
//       style={{
//         backgroundImage: `url(${sq.src})`,
//         backgroundSize: "cover",
//       }}
//     ></motion.div>
//   ));
// };

// const ShuffleGrid = () => {
//   const timeoutRef = useRef<any>(null);
//   const [squares, setSquares] = useState(generateSquares());

//   useEffect(() => {
//     shuffleSquares();

//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   const shuffleSquares = () => {
//     setSquares(generateSquares());

//     timeoutRef.current = setTimeout(shuffleSquares, 3000);
//   };

//   return (
//     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
//       {squares.map((sq) => sq)}
//     </div>
//   );
// };

// export default ShuffleHero;