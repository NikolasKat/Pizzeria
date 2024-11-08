import { useState } from "react";
import Mark from "../mark/Mark";

function ListItem({ description }) {
   const [isHovered, setIsHovered] = useState(false);

   return (
      <>
         <div
            className="relative w-[400px] text-black m-20 p-1 text-2xl text-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
         >
            <Mark text={"День шопінгу -29%"} description={description} />
            <img src="/shoose.avif" alt="img" className="" />
            <div className="p-4">
               <a href="#">
                  <h3 className="transition-colors duration-300 ease-in-out">
                     Кеди Indoor OG Sneakers
                  </h3>
               </a>
               <h3 className="font-extrabold">22990$</h3>
            </div>
            {isHovered && (
               <button className="absolute top-48 left-[160px] bg-black p-3 text-white text-xl uppercase font-semibold w-[130px] h-16 transition-colors duration-300 ease-in-out hover:border hover:border-solid hover:border-purple-700 hover:bg-gray-400 hover:text-purple-950">
                  Купити
               </button>
            )}
         </div>
      </>
   );
}

export default ListItem;
