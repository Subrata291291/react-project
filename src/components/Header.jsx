import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className="header_area w-100">
      <nav className="navbar navbar-expand-md shadow">
        <div className="container position-relative">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>

          <button className="navbar-toggler p-0 border-0" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div className="navbar_icon">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-lg-0 primary_nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              {/* <li className="nav-item dropdown dropdown-mega shop_mega_menu position-static">
                <Link className="nav-link dropdown-toggle" to="blog" data-bs-toggle="dropdown">Blog</Link>
                <ul className="dropdown-menu shadow">
                  <li><Link className="dropdown-item" to="/gallery">Blog</Link></li>
                  <li><Link className="dropdown-item" to="/blogs">Blog</Link></li>
                </ul>
              </li> */}
              <li className="nav-item contact_page">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item contact_page">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
              <li className="nav-item contact_page">
                <Link className="nav-link" to="/checkout">Checkout</Link>
              </li>
              <li className="nav-item contact_page">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <ul className="right_menu">
            <li className="position-relative">
              <div className="serach_box">
                <Link  to="/contact"><i className="fa fa-search" aria-hidden="true"></i></Link>
              </div>
              <div className="cart_area position-relative">
                <Link  to="/cart"><i className="fa fa-shopping-basket"></i></Link>
                <span>0</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
