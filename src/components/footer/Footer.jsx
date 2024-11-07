import { SiPuma } from "react-icons/si";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";

function Footer() {
   return (
      <>
         <footer className="w-full min-h-40 px-11 py-24 bg-neutral-900">
            <a href="#" className="transition-colors duration-300 ease-in-out">
               <SiPuma className="text-7xl my-0 mx-auto mb-6" />
            </a>
            <div className="flex flex-col desktop:justify-between desktop:flex-row">
               <div className="flex justify-between items-end mb-11">
                  <form className="border border-solid border-white uppercase font-bold text-xl p-10 max-w-[600px] right-0">
                     <h3>
                        Приєднайся до закритого клубу підписників, щоб отримати{" "}
                        <span className="text-red-600">10% знижки</span> на
                        покупку
                     </h3>
                     <div className="flex justify-between mt-4 flex-wrap items-end">
                        <div>
                           <input
                              type="email"
                              placeholder="Type an email"
                              className="text-black"
                           />
                           <p className="lowercase font-light">
                              Будь ласка, заповніть поле
                           </p>
                        </div>
                        <button className="uppercase mt-6 border border-solid border-red-600 bg-black px-2 py-2 transition-colors duration-300 ease-in-out forBtn:mt-5">
                           Підписатися
                        </button>
                     </div>
                  </form>
               </div>

               <div className="flex justify-center flex-col gap-8 items-center text-center text-xl flex-wrap mt-6 phones:flex-row phones:justify-around phones:text-left">
                  <div className="w-[180px]">
                     <h4 className="text-3xl mb-6 phones:text-xl phones:mb-3">
                        Допомога
                     </h4>
                     <ul>
                        <li>
                           <a
                              href="#"
                              className="transition-colors duration-300 ease-in-out"
                           >
                              Допомога
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="transition-colors duration-300 ease-in-out"
                           >
                              Доставка
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="transition-colors duration-300 ease-in-out"
                           >
                              Оплата
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="transition-colors duration-300 ease-in-out"
                           >
                              Повернення
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="transition-colors duration-300 ease-in-out"
                           >
                              Відстеження
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className="w-[200px]">
                     <ul>
                        <h4 className="text-3xl mb-6 phones:text-xl phones:mb-3">
                           Про компанію PUMA
                        </h4>
                        <li>
                           <a
                              href="#"
                              className="transition-colors duration-300 ease-in-out"
                           >
                              Вакансії
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="transition-colors duration-300 ease-in-out"
                           >
                              Компанія
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="transition-colors duration-300 ease-in-out"
                           >
                              Корпоративні новини
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="transition-colors duration-300 ease-in-out"
                           >
                              Екологія
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className="flex mt-4 justify-around text-5xl phones:mt-0 phones:flex-row">
                     <a
                        href="#"
                        className="transition-colors duration-300 ease-in-out"
                     >
                        <CiFacebook />
                     </a>
                     <a
                        href="#"
                        className="transition-colors duration-300 ease-in-out"
                     >
                        <CiInstagram />
                     </a>
                     <a
                        href="#"
                        className="transition-colors duration-300 ease-in-out"
                     >
                        <AiOutlinePinterest />
                     </a>
                     <a
                        href="#"
                        className="transition-colors duration-300 ease-in-out"
                     >
                        <CiYoutube />
                     </a>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}

export default Footer;
