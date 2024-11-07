function ListItem() {
   return (
      <>
         <div className="block w-[400px] text-black m-20 p-1 text-2xl text-center border border-solid border-gray-400 rounded-lg cursor-pointer">
            <img src="/shoose.avif" alt="img" className="" />
            <div className="p-4">
               <a href="#">
                  <h3 className="">Кеди Indoor OG Sneakers</h3>
               </a>
               <h3 className="font-extrabold">22990$</h3>
            </div>
         </div>
      </>
   );
}

export default ListItem;
