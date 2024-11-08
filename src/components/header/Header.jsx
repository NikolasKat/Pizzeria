import { useState } from "react";

import { CiSearch, CiHeart, CiShoppingCart, CiMenuFries } from "react-icons/ci";
import { SiPuma } from "react-icons/si";

import Dropdown from "../dropdown/Dropdow";

function Header({ isOpen, setIsOpen }) {
   return (
      <>
         <header className="fixed top-0 min-h-24 w-full py-6 px-11 bg-neutral-900 ">
            <div className="flex justify-between items-center text-4xl">
               <div className="flex gap-16 items-center text-xl">
                  <a
                     href="#"
                     className="text-7xl transition-colors duration-300 ease-in-out"
                  >
                     <SiPuma />
                  </a>
                  <div className="hidden  desktop:flex desktop:gap-5">
                     <Dropdown
                        place={"header"}
                        title="Чоловіки"
                        categories={["Взуття", "Одяг", "Новинки", "Новинки"]}
                     />
                     <Dropdown
                        place={"header"}
                        title="Жінки"
                        categories={["Взуття", "Одяг", "Новинки", "Новинки"]}
                     />
                     <Dropdown
                        place={"header"}
                        title="Діти"
                        categories={["Взуття", "Одяг", "Новинки", "Новинки"]}
                     />
                     <Dropdown
                        place={"header"}
                        title="Колекції"
                        categories={["Lifestyle", "Another"]}
                     />
                  </div>
               </div>
               <div className="flex justify-between w-[200px] ">
                  <a
                     href="#"
                     className="transition-colors duration-300 ease-in-out"
                  >
                     <CiSearch />
                  </a>
                  <a
                     href="#"
                     className="transition-colors duration-300 ease-in-out"
                  >
                     <CiHeart />
                  </a>
                  <a
                     href="#"
                     className="transition-colors duration-300 ease-in-out"
                  >
                     <CiShoppingCart />
                  </a>

                  <button
                     href="#"
                     className="block bg-neutral-900 transition-colors duration-300 ease-in-out extraWidthDesktop:hidden focus:outline-none"
                     onClick={() => {
                        setIsOpen((isOpen = !isOpen));
                     }}
                  >
                     <CiMenuFries />
                  </button>
               </div>
            </div>
         </header>
      </>
   );
}

export default Header;
