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
import SingleProduct from "./pages/SingleProduct";
import { CartProvider } from "./components/AddToCart";

import useGlobalScripts from '../src/assets/js/useGlobalScripts';
import IntroducingVideo from "./components/IntroducingVideo";

// Toastify setup
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
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
        
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>

        <IntroducingVideo />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
