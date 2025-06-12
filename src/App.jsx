import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';
import ThankYou from "./pages/ThankYou";
import { CartProvider } from "./components/AddToCart";
import useGlobalScripts from '../src/assets/js/useGlobalScripts';

import '../src/assets/css/header.css';
import '../src/assets/css/style.css';
import "aos/dist/aos.css";
import AOS from "aos";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useGlobalScripts();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
