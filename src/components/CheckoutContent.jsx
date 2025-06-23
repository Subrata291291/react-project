import React, { useContext, useState } from 'react';
import { CartContext } from '../components/AddToCart';
import { useNavigate } from 'react-router-dom';

const CheckoutContent = () => {
  const { cartItems, clearCart } = useContext(CartContext); // 👈 include clearCart
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    address: '',
    apartment: '',
    city: '',
    state: 'West Bengal',
    pin: '',
    phone: '',
    payment: 'Cash on delivery',
  });

  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalAmount = subtotal - discount;

  const handleCouponApply = (e) => {
    e.preventDefault();
    const entered = coupon.trim().toUpperCase();
    if (entered === 'FLAT50') {
      setDiscount(50);
      setCouponMessage('Coupon applied: ₹50 off');
    } else {
      setDiscount(0);
      setCouponMessage('Invalid coupon code');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      e.stopPropagation();
    } else {
      const orderDetails = {
        orderNumber: Math.floor(1000 + Math.random() * 9000),
        date: new Date().toLocaleDateString(),
        total: `₹${totalAmount.toFixed(2)}`,
        paymentMethod: formData.payment,
        products: cartItems.map(item => ({
          name: item.title,
          quantity: item.qty,
          price: `₹${(item.price * item.qty).toFixed(2)}`
        })),
        billing: {
          name: `${formData.firstname} ${formData.lastname}`,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          apartment: formData.apartment,
          city: formData.city,
          state: formData.state,
          pin: formData.pin
        }
      };

      clearCart(); // ✅ clear cart before redirect
      navigate('/thankyou', { state: orderDetails });
    }

    setValidated(true);
  };

  return (
    <div>
      <section className="checkout-area">
        <div className="container">
          <div className="row gx-md-5">
            <div className="col-lg-8 order-2 order-md-1 order-lg-1">
              <div className="checkout-left" data-aos="fade-right">
                <form
                  className={`checkout-form needs-validation ${validated ? 'was-validated' : ''}`}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="contact-information">
                    <h3>Contact information</h3>
                    <p className="mb-4 mt-2">We'll use this email to send you order updates.</p>
                    <input type="email" name="email" className="form-control" placeholder="Email Address" required onChange={handleChange} />
                    <div className="invalid-feedback">Please enter a valid email.</div>
                  </div>

                  <div className="billing-address row">
                    <h3>Billing address</h3>
                    <div className="col-md-6 mb-4">
                      <input type="text" name="firstname" className="form-control" placeholder="First Name" required onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-4">
                      <input type="text" name="lastname" className="form-control" placeholder="Last Name" required onChange={handleChange} />
                    </div>
                    <div className="col-md-12 mb-4">
                      <input type="text" name="address" className="form-control" placeholder="Address" required onChange={handleChange} />
                    </div>
                    <div className="col-md-12 mb-4">
                      <input type="text" name="apartment" className="form-control" placeholder="Apartment, suite, etc. (optional)" onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-4">
                      <input type="text" name="city" className="form-control" placeholder="City" required onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-4">
                      <select name="state" className="form-select" required onChange={handleChange}>
                        <option value="">State</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input type="tel" name="pin" className="form-control" placeholder="Pin Code" required onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-4">
                      <input type="tel" name="phone" className="form-control" placeholder="Phone" required onChange={handleChange} />
                    </div>
                  </div>

                  <div className="payment-method" data-aos="fade-up">
                    <h3>Payment Method</h3>
                    <p>We currently support Cash on Delivery only.</p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment"
                        value="Cash on delivery"
                        defaultChecked
                        onChange={handleChange}
                      />
                      <label className="form-check-label">Cash on delivery</label>
                      <p className="cash-content">Pay with cash on delivery</p>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="submit-btn" type="submit">
                      Pay Now
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4 order-1 order-md-1 order-lg-2">
              <div className="checkout-right" data-aos="fade-left">
                <div className="order-summary">
                  <p className="oreder-summary-title">Order Summary</p>

                  {/* Coupon Section */}
                  <form onSubmit={handleCouponApply} className="row g-2 coupon-area">
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Enter coupon code (FLAT50)"
                      />
                    </div>
                    <div className="col-4">
                      <button type="submit" className="coupon-btn btn-dark btn w-100">Apply</button>
                    </div>
                    {couponMessage && (
                      <div className="col-12">
                        <p className={`mt-2 ${discount ? 'text-success' : 'text-danger'}`}>{couponMessage}</p>
                      </div>
                    )}
                  </form>

                  <ul>
                    {cartItems.map(item => (
                      <li key={item.id}>
                        <div className="row">
                          <div className="col-8">
                            <ul className="d-flex order-box">
                              <li>
                                <div className="order-pic position-relative">
                                  <img src={item.img} alt={item.title} style={{ width: '50px' }} />
                                  <span className="position-absolute">{item.qty}</span>
                                </div>
                              </li>
                              <li>
                                <div className="order-details">
                                  <p>{item.title}</p>
                                  <h3>₹{(item.price * item.qty).toFixed(2)}</h3>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="col-4 text-end">
                            <h3>₹{(item.price * item.qty).toFixed(2)}</h3>
                          </div>
                        </div>
                      </li>
                    ))}

                    <li className="mt-3">
                      <div className="row">
                        <div className="col-6"><p>Subtotal</p></div>
                        <div className="col-6 text-end"><h3>₹{subtotal.toFixed(2)}</h3></div>
                      </div>
                    </li>

                    {discount > 0 && (
                      <li className="mt-2">
                        <div className="row">
                          <div className="col-6"><p className="text-success">Discount</p></div>
                          <div className="col-6 text-end"><h5 className="text-success">− ₹{discount.toFixed(2)}</h5></div>
                        </div>
                      </li>
                    )}

                    <li className="mt-2">
                      <div className="row">
                        <div className="col-6"><h2><b>Total</b></h2></div>
                        <div className="col-6 text-end"><h3>₹{totalAmount.toFixed(2)}</h3></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutContent;
