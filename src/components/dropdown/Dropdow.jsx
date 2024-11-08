import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function Dropdown({ title, categories, place }) {
   const style =
      place == "sidebar"
         ? "text-black text-4xl uppercase transition-colors duration-300 ease-in-out focus:outline-none"
         : "inline-flex w-full justify-center bg-neutral-900 transition-colors duration-300 ease-in-out focus:outline-none";

   const menuItems = categories.map((item, i) => {
      return (
         <MenuItem key={i}>
            <a
               href="#"
               className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
               {item}
            </a>
         </MenuItem>
      );
   });

   return (
      <Menu as="div" className="relative inline-block text-left">
         <div>
            <MenuButton className={style}>{title}</MenuButton>
         </div>

         <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
         >
            <div className="py-1">{menuItems}</div>
         </MenuItems>
      </Menu>
   );
}

export default Dropdown;
