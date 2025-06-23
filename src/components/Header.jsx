import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { CartContext } from './AddToCart';

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="header_area w-100">
      <nav className="navbar navbar-expand-md shadow">
        <div className="container position-relative">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>

          <button
            className="navbar-toggler p-0 border-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="navbar_icon">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-lg-0 primary_nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/checkout">Checkout</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <ul className="right_menu">
            <li className="position-relative">
              {/* <div className="serach_box">
                <Link to="/contact">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </Link>
              </div> */}
              <div className="cart_area position-relative">
                <Link to="/cart">
                  <i className="fa fa-shopping-basket"></i>
                </Link>
                <span>{totalQty}</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
