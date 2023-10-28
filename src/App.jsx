import { useState } from "react";

function App() {
   const [color, setColor] = useState("white");

   return (
      <div
         className="w-full h-screen duration-200"
         style={{ backgroundColor: color }}>
         {/* container */}
         <div className="fixed flex flex-wrap justify-center px-2 bottom-12 inset-x-8">
            <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-md rounded-3xl shadow-gray-400">
               {/* buttons */}
               <button
                  onClick={() => setColor("red")}
                  className="px-4 py-1 font-medium text-white rounded-full shadow-sm outline-none"
                  style={{ backgroundColor: "red" }}>
                  Red
               </button>

               <button
                  onClick={() => setColor("green")}
                  className="px-4 py-1 font-medium text-white rounded-full shadow-sm outline-none"
                  style={{ backgroundColor: "green" }}>
                  Green
               </button>

               <button
                  onClick={() => setColor("blue")}
                  className="px-4 py-1 font-medium text-white rounded-full shadow-sm outline-none"
                  style={{ backgroundColor: "blue" }}>
                  Blue
               </button>

               <button
                  onClick={() => setColor("yellow")}
                  className="px-4 py-1 font-medium text-black rounded-full shadow-sm outline-none"
                  style={{ backgroundColor: "yellow" }}>
                  Yellow
               </button>

               <button
                  onClick={() => setColor("black")}
                  className="px-4 py-1 font-medium text-white rounded-full shadow-sm outline-none"
                  style={{ backgroundColor: "black" }}>
                  Black
               </button>
            </div>
         </div>
      </div>
   );
}

export default App;
