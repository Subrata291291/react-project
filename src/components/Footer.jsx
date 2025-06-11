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
              <li><Link to="/checkout">Checkout</Link></li>
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

      {/* Modal */}
      <div
        className="modal fade modal-lg first-order-popup"
        id="myModal"
        tabIndex="-1"
        aria-labelledby="exampleModalToggleLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body my-modal">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <a className="modal-brand" href="#">
                <img src="images/logo.png" alt="logo" />
              </a>

              <h3 className="title">GET 10% OFF YOUR FIRST ORDER!</h3>

              <p>
                <strong>Register your Email</strong> and you will be added to our
                <strong> Email Mailing List</strong> and receive a
                <strong> 10% off Voucher</strong> to use on your next order.
                (Valid Once per Customer)
              </p>

              <p>
                <strong>Don’t worry, we hate spam too</strong> – that’s why we send out emails
                only to showcase new items or announce
                <strong> Special Offers</strong> and <strong> Launch Drops</strong>.
                You can unsubscribe at any moment.
              </p>

              <form className="subscript_form_box">
                <div className="form-group frm_box">
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group frm_box">
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="info@gmail.com"
                  />
                </div>
                <div className="frm_box_submit text-center">
                  <input type="submit" value="SUBSCRIBE" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
