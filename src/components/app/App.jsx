import { useState } from "react";

import Header from "../header/Header";
import Drawer from "../drawer/Drawer";

function App() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <Header isOpen={isOpen} setIsOpen={setIsOpen} />
         <main className="pt-28">
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
         </main>
      </>
   );
}

export default App;
