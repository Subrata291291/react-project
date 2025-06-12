import React, { useContext, useState } from 'react';
import { CartContext } from '../components/AddToCart';
import { useNavigate } from 'react-router-dom';

const CheckoutContent = () => {
  const { cartItems } = useContext(CartContext);
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

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const orderDetails = {
        orderNumber: Math.floor(1000 + Math.random() * 9000), // simple random order ID
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
          address: formData.address,
          address1: `${formData.apartment} ${formData.pin}`,
          state: formData.state,
          phone: formData.phone,
          email: formData.email
        }
      };

      navigate('/thankyou', { state: orderDetails });
    }

    setValidated(true);
  };

  return (
    <div>
      <section className="checkout-area shadow">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8 order-2 order-md-2 order-lg-1">
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
                      <div className="invalid-feedback">Enter first name.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input type="text" name="lastname" className="form-control" placeholder="Last Name" required onChange={handleChange} />
                      <div className="invalid-feedback">Enter last name.</div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <input type="text" name="address" className="form-control" placeholder="Address" required onChange={handleChange} />
                      <div className="invalid-feedback">Enter address.</div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <input type="text" name="apartment" className="form-control" placeholder="Apartment, suite, etc. (optional)" onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-4">
                      <input type="text" name="city" className="form-control" placeholder="City" required onChange={handleChange} />
                      <div className="invalid-feedback">Enter city.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <select name="state" className="form-select" required onChange={handleChange}>
                        <option disabled value="">State</option>
                        <option value="West Bengal">West Bengal</option>
                        {/* Add more states as needed */}
                      </select>
                      <div className="invalid-feedback">Choose a state.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input type="tel" name="pin" className="form-control" placeholder="Pin Code" required onChange={handleChange} />
                      <div className="invalid-feedback">Enter pin code.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input type="tel" name="phone" className="form-control" placeholder="Phone" required onChange={handleChange} />
                      <div className="invalid-feedback">Enter phone number.</div>
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
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="submit-btn w-100" type="submit">
                      Pay Now
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4 order-1 order-md-1 order-lg-2">
              <div className="checkout-right" data-aos="fade-left">
                <div className="order-summary">
                  <p className="oreder-summary-title">Order Summary</p>
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
                          <div className="col-4">
                            <div className="total-checkout-price" style={{ float: 'right' }}>
                              <h3>₹{(item.price * item.qty).toFixed(2)}</h3>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}

                    <li>
                      <div className="row">
                        <div className="col-6"><p>Subtotal</p></div>
                        <div className="col-6"><h3 style={{ float: 'right' }}>₹{totalAmount.toFixed(2)}</h3></div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-6"><h2><b>Total</b></h2></div>
                        <div className="col-6"><h3 style={{ float: 'right' }}>₹{totalAmount.toFixed(2)}</h3></div>
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
