import "./App.css";
import Header from "./Header/Header";
import Logo from "./img/basket1.png";
import Logo1 from "./img/LLLogo.png";
import { Route, Routes } from "react-router-dom";
import { Blog } from "./Header/Nav";
import Home from "./Header/Home";
import Shop from "./Header/Shop";
import Footer from "./Footer";
import TheBrand from "./Header/Thebrand";
import "./Header/Shop.css";
import Productinfo from "./Productinfo";
import "./productinfo.css";
import Card from "./Card";
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  function add(){
    setCount(count + 1)
  }

  return (
    <div className="App">
      <div className="topdiv">
        <p>
          FREE U.S. SHIPPING ON ORDERS OF $99+ • FREE U.S. RETURNS (LEARN MORE)
        </p>
      </div>

      <Header sec={Logo1} icon={Logo}  ttt={count}/>

      <Routes>
        <Route path="/products/:productId" element={<Productinfo ooo={add}/>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<TheBrand />} />
        <Route path="/products/card" element={<Card/>} />
        <Route path="/shop" element={<Shop lll={add}/>} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
