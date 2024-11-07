import Header from "../header/Header";
import Footer from "../footer/Footer";
import ListItem from "../list-item/ListItem";

function App() {
   return (
      <>
         <Header />
         <main className="pt-40">
            <ListItem />
            <Footer />
         </main>
      </>
   );
}

export default App;
