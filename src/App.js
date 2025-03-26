import { useState } from "react";

import Header from "./components/Layout/Header";
import Candies from "./components/Candies/Candies";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";
import CandiesForm from "./components/AddCandies/CandiesForm";

function App() {

  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isAddCandyFormVisible, setIsAddCandyFormVisible] = useState(false);

  const showIsCartVisible = () => {
    setIsCartVisible(true);
  }

  const hideIsCartVisible = () => {
    setIsCartVisible(false);
  }

  const showIsAddCandyFormVisible = () => {
    setIsAddCandyFormVisible(true);
  }

  const hideIsAddCandyFormVisible = () => {
    setIsAddCandyFormVisible(false);
  }

  return (
    <CartContextProvider>
      {isCartVisible && <Cart onClose={hideIsCartVisible} />}
      {isAddCandyFormVisible && <CandiesForm onClose={hideIsAddCandyFormVisible} />}
      <Header onCartButtonClick={showIsCartVisible} onAddButtonClick={showIsAddCandyFormVisible} />
      <main>
        <Candies />
      </main>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
