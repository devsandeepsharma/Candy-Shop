import { useState } from "react";

import Header from "./components/Layout/Header";
import Candies from "./components/Candies/Candies";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import CandiesForm from "./components/AddCandies/CandiesForm";
import CandiesContextProvider from "./store/CandiesContextProvider";
import CartContextProvider from "./store/CartContextProvider";

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
    <CandiesContextProvider>
      <CartContextProvider>
        {isCartVisible && <Cart onClose={hideIsCartVisible} />}
        {isAddCandyFormVisible && <CandiesForm onClose={hideIsAddCandyFormVisible} />}
        <Header onCartButtonClick={showIsCartVisible} onAddButtonClick={showIsAddCandyFormVisible} />
        <main>
          <Candies />
        </main>
        <Footer />
      </CartContextProvider>
    </CandiesContextProvider>
  );
}

export default App;
