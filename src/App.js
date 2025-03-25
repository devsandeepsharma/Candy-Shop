import Header from "./components/Layout/Header";
import Candies from "./components/Candies/Candies";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Candies />
      </main>
      <Footer />
    </>
  );
}

export default App;
