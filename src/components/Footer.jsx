import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer_area">
        <div className="container">
          <div className="footer_head text-center">
            <h3 className="title1">Say Hello to Us</h3>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                required
                autoComplete="on"
              />
              <button type="submit" className="btn newsletter-btn" name="commit">
                Send
              </button>
            </form>
          </div>

          <div className="footer_menu text-center">
            <h4>HPhone</h4>
            <ul>
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              {/* <li><Link to="/checkout">Checkout</Link></li> */}
            </ul>
          </div>
        </div>
      </footer>

      <div className="footer_btm text-center" style={{ backgroundColor: 'var(--ss-primary)' }}>
        <div className="container">
          <p>
            © 2024 dt-HPHONE <a href="#" target="_blank" rel="noreferrer">Designed by Subrata</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
