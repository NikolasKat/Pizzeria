import { CiSearch, CiHeart, CiShoppingCart, CiMenuFries } from "react-icons/ci";
import { SiPuma } from "react-icons/si";

function Header() {
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
                  <div className="hidden desktop:flex desktop:gap-16">
                     <a
                        href="#"
                        className="transition-colors duration-300 ease-in-out"
                     >
                        Чоловіки
                     </a>
                     <a
                        href="#"
                        className="transition-colors duration-300 ease-in-out"
                     >
                        Жінки
                     </a>
                     <a
                        href="#"
                        className="transition-colors duration-300 ease-in-out"
                     >
                        Діти
                     </a>
                     <a
                        href="#"
                        className="transition-colors duration-300 ease-in-out"
                     >
                        Колекції
                     </a>
                     <a
                        href="#"
                        className="transition-colors duration-300 ease-in-out"
                     >
                        Акції
                     </a>
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
                  <a
                     href="#"
                     className="block transition-colors duration-300 ease-in-out extraWidthDesktop:hidden"
                  >
                     <CiMenuFries />
                  </a>
               </div>
            </div>
         </header>
      </>
   );
}

export default Header;
