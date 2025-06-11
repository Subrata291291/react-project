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
import '../src/assets/css/header.css';
import '../src/assets/css/style.css';
import AOS from "aos";
import "aos/dist/aos.css";
import 'font-awesome/css/font-awesome.min.css';
import Footer from './components/Footer';
import useGlobalScripts from '../src/assets/js/useGlobalScripts';

function App() {
  useGlobalScripts();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
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
        </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
