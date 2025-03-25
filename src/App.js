import Header from "./components/Layout/Header";
import Candies from "./components/Candies/Candies";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {

  const [isCartVisible, setIsCartVisible] = useState(false);

  const showIsCartVisible = () => {
    setIsCartVisible(true);
  }

  const hideIsCartVisible = () => {
    setIsCartVisible(false);
  }

  return (
    <>
      {isCartVisible && <Cart onClose={hideIsCartVisible} />}
      <Header onClick={showIsCartVisible} />
      <main>
        <Candies />
      </main>
      <Footer />
    </>
  );
}

export default App;
