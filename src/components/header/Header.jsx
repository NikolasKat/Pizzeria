import { CiSearch, CiHeart, CiShoppingCart, CiMenuFries } from "react-icons/ci";
import { SiPuma } from "react-icons/si";

function Header() {
   return (
      <>
         <header className="fixed top-0 min-h-24 w-full py-6 px-11 bg-neutral-900 ">
            <div className="flex justify-between items-center text-4xl ">
               <a
                  href="#"
                  className="text-7xl transition-colors duration-300 ease-in-out"
               >
                  <SiPuma />
               </a>
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
                     className="transition-colors duration-300 ease-in-out"
                  >
                     {" "}
                     <CiMenuFries />
                  </a>
               </div>
            </div>
         </header>
      </>
   );
}

export default Header;
