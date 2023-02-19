
import './App.css';
import Header from './Header/Header';
import Logo from './img/basket1.png';
import Logo1 from './img/Photologo.png';
import {Route, Routes} from 'react-router-dom';
import { Blog} from './Header/Nav'; 
import Home from './Header/Home';
import Shop from './Header/Shop';
import Footer from './Footer';
import TheBrand  from './Header/Thebrand';
import './Header/Shop.css';
import Productinfo from './Productinfo';
import './productinfo.css';



 function App() {

  

  return (
    <div className="App">
      <div className="topdiv">
      <p>FREE U.S. SHIPPING ON ORDERS OF $99+ • FREE U.S. RETURNS (LEARN MORE)</p>
      </div>
      
      <Header sec = {Logo1} icon = {Logo} />
      
      <Routes>
          <Route path='/products/:productId' element={<Productinfo/>} /> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<TheBrand />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          </Routes>
      <Footer/>
    </div>
  );
}

export default App;
