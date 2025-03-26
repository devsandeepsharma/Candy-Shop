import { useState } from "react";

import Header from "./components/Layout/Header";
import Candies from "./components/Candies/Candies";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

function App() {

  const [isCartVisible, setIsCartVisible] = useState(false);

  const showIsCartVisible = () => {
    setIsCartVisible(true);
  }

  const hideIsCartVisible = () => {
    setIsCartVisible(false);
  }

  return (
    <CartContextProvider>
      {isCartVisible && <Cart onClose={hideIsCartVisible} />}
      <Header onClick={showIsCartVisible} />
      <main>
        <Candies />
      </main>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
