
import  Header from "./component/layout/Header/Header.js"
import Footer from "./component/layout/Footer/Footer.js";
import { Route, BrowserRouter as Router , Routes} from "react-router-dom";
import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js";
import Login from "./component/User/Login.jsx";
import Register from "./component/User/Register.jsx";
import ProductDetails from "./component/Product/ProductDetails.js";
import  Cart from "./component/Cart/Cart.js"
import Product from "./component/Product/Product.js";
import Contact from "./component/layout/Contact/Contact.js"
import About from "./component/layout/About/About.js";
import Success from "./component/Cart/Success.js";
import Cancel from "./component/Cart/Cancel.js";
function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    
  }, []);

  return (
    <Router> <div className="App">
        
         <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
     
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route  path="/product/:id" element={ <ProductDetails/>} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Products" element= {<Product/>}/>
      <Route path="/Contact" element= {<Contact/>}/>
      <Route path="/About" element= {<About/>}/>
      <Route path="/success" element= {<Success/>}/>
      <Route path="/cancel" element= {<Cancel/>}/>

      </Routes>
     
    <Footer />
   </div>
 </Router>
    
  );
}

export default App;
