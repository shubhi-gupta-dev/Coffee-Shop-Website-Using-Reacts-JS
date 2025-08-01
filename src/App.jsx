import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Discover from "./components/Discover";
import Menu from './components/Menu' ;
import Footer from './components/Footer' ;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Banner />
      <Discover />
      <Menu />
      <Footer/>
    </>
  );
}

export default App;
