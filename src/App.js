import Home from "./components/Home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";



import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/Contact.scss";
import "./styles/Cart.scss";
import "./styles/Shipping.scss";




import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <Router>

      <Header/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Shipping" element={<Shipping/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
