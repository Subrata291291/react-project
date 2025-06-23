import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../components/AddToCart';

const CartContent = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (id, type) => {
    const item = cartItems.find(i => i.id === id);
    if (!item) return;

    const newQty = type === 'increase' ? item.qty + 1 : item.qty - 1;
    if (newQty < 1) return;
    updateQuantity(id, newQty);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);

  return (
    <div>
      <section className="cart-area">
        <div className="container">
          <div className="row gx-lg-5">
            <div className="col-md-8">
              <div className="product-details-left" data-aos="fade-right">
                <div className="product-heading">
                  <ul className="d-flex justify-content-between">
                    <li><h4>PRODUCT</h4></li>
                    <li className="d-none d-md-block"><h4>TOTAL</h4></li>
                  </ul>
                </div>

                <div className="product-details-box">
                  {cartItems.length === 0 ? (
                    <div className="text-left mt-4">
                      <p style={{ fontSize: '1.4rem' }}>Your cart is empty.</p>
                      <Link
                        to="/shop"
                        className="btn btn-dark mt-3"
                        style={{ fontSize: '1.4rem', padding: '1rem 2rem' }}
                      >
                        Shop Now
                      </Link>
                    </div>
                  ) : (
                    cartItems.map(product => (
                      <div className="row cart-item mb-3" key={product.id}>
                        <div className="col-md-6">
                          <div className="product-price-details">
                            <div className="row">
                              <div className="col-3">
                                <div className="product-pic">
                                  <img
                                    src={product.img || product.image}
                                    alt={product.title}
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className="col-9">
                                <h4 className="product-title">{product.title}</h4>
                                <h5 className="product-price mt-3">
                                  {formatPrice(product.price)}
                                </h5>
                                <div className="quantity-wrapper mt-4">
                                  <div className="quantity-selector">
                                    <button className="qty-btn minus" onClick={() => handleQuantityChange(product.id, 'decrease')}>−</button>
                                    <span className="qty-value mx-2">{product.qty}</span>
                                    <button className="qty-btn plus" onClick={() => handleQuantityChange(product.id, 'increase')}>+</button>
                                  </div>
                                  <div>
                                    <button
                                      onClick={() => removeFromCart(product.id)}
                                      className="remove-item text-danger mt-3 d-block btn btn-link"
                                    >
                                      Remove item
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 d-none d-md-block">
                          <div className="product-details-cart-total">
                            <h5 className="product-price mt-3">
                              {formatPrice(product.price * product.qty)}
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-cart-total shadow p-4" data-aos="fade-left">
                <h3 className="cart-total">CART TOTALS</h3>
                <ul className="d-flex justify-content-between">
                  <li><h5>Subtotal</h5></li>
                  <li><h6 className="subtotal-price">{formatPrice(subtotal)}</h6></li>
                </ul>
                <ul className="d-flex justify-content-between">
                  <li><h5><b>TOTAL</b></h5></li>
                  <li><h6 className="total-price"><b>{formatPrice(subtotal)}</b></h6></li>
                </ul>

                {cartItems.length > 0 && (
                  <button
                    className="w-100 btn btn-primary mt-2"
                    onClick={() => navigate('/checkout')}
                  >
                    PROCEED TO CHECKOUT
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartContent;
