import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import HeaderLayout from "./components/Header/HeaderLayout";
import HeaderLayoutDetail from "./components/Header/HeaderLayoutDetail";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:productsId' element={<HeaderLayout />} />
        <Route path='/products/:productsId/:productDetail' element={<HeaderLayoutDetail />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/:cartItems' element={<Cart />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
