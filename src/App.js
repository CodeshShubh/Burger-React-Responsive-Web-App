import Home from "./components/Home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import PaymentSuccess from "./components/Cart/PaymentSuccess";
import Login from "./components/Login/Login";
import Me from "./components/Profile/Me";
import MyOrders from "./components/myorders/MyOrders";
import OrderDetails from "./components/myorders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";





import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/Contact.scss";
import "./styles/Cart.scss";
import "./styles/Shipping.scss";
import "./styles/ConfirmOrder.scss";
import "./styles/PaymentSuccess.scss";
import "./styles/Login.scss";
import "./styles/Me.scss";
import "./styles/table.scss";
import "./styles/OrderDetails.scss";
import "./styles/Dashboard.scss";
import "./styles/About.scss"




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
        <Route path="/ConfirmOrder" element={<ConfirmOrder/>}/>
        <Route path="/PaymentSuccess" element={<PaymentSuccess/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Me" element={<Me/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
        <Route path="/order/:id" element={<OrderDetails/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/users" element={<Users/>}/>
        <Route path="/admin/orders" element={<Orders/>}/>
        <Route path="/about" element={<About/>}/>


        <Route path="*" element={<NotFound/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
