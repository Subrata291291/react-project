import React from 'react'
import { Link } from 'react-router-dom'

const CartContent = () => {
  return (
    <div>
      <section className="cart-area shadow">
      <div className="container">
        <div className="row gx-5">
          <div className="col-md-8">
            <div className="product-details-left" data-aos="fade-right">
              <div className="product-heading">
                <ul className="d-flex justify-content-between">
                  <li>
                    <h4>PRODUCT</h4>
                  </li>
                  <li className="d-none d-md-block">
                    <h4>TOTAL</h4>
                  </li>
                </ul>
              </div>
                <div className="product-details-box">
                    <div className="row cart-item" data-id="6">
                        <div className="col-md-6">
                        <div className="product-price-details">
                            <div className="row">
                            <div className="col-4">
                                <div className="product-pic">
                                <img src="images/5-3.jpg" alt="HD Television" />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="product-price-details">
                                <h4 className="product-title">HD Television</h4>
                                <h5 className="product-price mt-3">$450.30</h5>
                                </div>
                                <div className="quantity-wrapper mt-4">
                                <div className="quantity-selector">
                                    <button className="qty-btn minus">−</button>
                                    <span className="qty-value">1</span>
                                    <button className="qty-btn plus">+</button>
                                </div>
                                <div>
                                    <Link to="" className="remove-item text-danger mt-4 d-block">Remove item</Link>
                                </div>
                                </div>                         
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                        <div className="product-details-cart-total">
                            <h5 className="product-price mt-3">$450.30</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-cart-total" data-aos="fade-left">
              <h3 className="cart-total">CART TOTALS</h3>
              <ul className="d-flex justify-content-between">
                <li>
                  <h5>Subtotal</h5>
                </li>
                <li>
                  <h6 className="subtotal-price">$450.30</h6>
                </li>
              </ul>
              <ul className="d-flex justify-content-between">
                <li>
                  <h5><b>TOTAL</b></h5>
                </li>
                <li>
                  <h6 className="total-price">$450.30</h6>
                </li>
              </ul>
              <button className="w-100">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default CartContent
