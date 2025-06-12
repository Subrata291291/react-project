import React from 'react';

const CheckoutContent = () => {
  return (
    <div>
      <section className="checkout-area shadow">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8 order-2 order-md-2 order-lg-1">
              <div className="checkout-left" data-aos="fade-right">
                <form
                  className="checkout-form needs-validation"
                  method="POST"
                  name="google-sheet"
                  noValidate
                >
                  <div className="contact-information">
                    <h3>Contact information</h3>
                    <p className="mb-4 mt-2">
                      We'll use this email to send you details and updates about your order.
                    </p>
                    <div className="input-group has-validation">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="validationCustomEmail"
                        aria-describedby="inputGroupPrepend"
                        required
                        placeholder="Email Address"
                      />
                      <div className="invalid-feedback">Please choose an email ID.</div>
                    </div>
                  </div>

                  <div className="billing-address row">
                    <h3>Billing address</h3>
                    <p className="mb-4 mt-2">
                      We'll use this email to send you details and updates about your order.
                    </p>
                    <div className="col-md-6 mb-4">
                      <input
                        type="text"
                        name="firstname"
                        className="form-control"
                        id="validationFirstname"
                        placeholder="John"
                        required
                      />
                      <div className="invalid-feedback">Please enter first name.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input
                        type="text"
                        name="lastname"
                        className="form-control"
                        id="validationLastname"
                        placeholder="Doe"
                        required
                      />
                      <div className="invalid-feedback">Please enter last name.</div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        id="validationAddress"
                        placeholder="Address"
                        required
                      />
                      <div className="invalid-feedback">Please enter an address.</div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <input
                        type="text"
                        name="apartment"
                        className="form-control"
                        id="validationApartment"
                        placeholder="Apartment, suite, etc. (optional)"
                      />
                      <div className="invalid-feedback">Please enter an apartment name.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        id="validationCity"
                        placeholder="City"
                        required
                      />
                      <div className="invalid-feedback">Please enter a city name.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <select
                        className="form-select"
                        name="state"
                        id="validationState"
                        required
                      >
                        <option disabled value="">
                          State
                        </option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                      <div className="invalid-feedback">Please select a valid state.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input
                        type="tel"
                        name="pin"
                        placeholder="Pin Code"
                        className="form-control"
                        id="validationPin"
                        required
                      />
                      <div className="invalid-feedback">Please enter a pin code.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        className="form-control"
                        id="validationPhone"
                        required
                      />
                      <div className="invalid-feedback">Please enter a phone number.</div>
                    </div>
                  </div>

                  <div className="payment-method" data-aos="fade-up">
                    <h3>Payment Method</h3>
                    <p className="mb-4 mt-2">
                      We'll use this email to send you details and updates about your order.
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment"
                        id="payment-cod"
                        value="Cash on delivery"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="payment-cod">
                        Cash on delivery
                      </label>
                      <p className="cash-content">Pay with cash on delivery</p>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="submit-btn w-100" type="submit" value="submit">
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
                    <li>
                      <div className="row">
                        <div className="col-8">
                          <ul className="d-flex order-box">
                            <li>
                              <div className="order-pic position-relative">
                                <img
                                  src="images/5-3.jpg"
                                  alt="HD Television"
                                  style={{ width: "50px" }}
                                />
                                <span className="position-absolute">1</span>
                              </div>
                            </li>
                            <li>
                              <div className="order-details">
                                <p>HD Television</p>
                                <h3>₹450.30</h3>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <div className="total-checkout-price" style={{ float: "right" }}>
                            <h3>₹450.30</h3>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="row">
                        <div className="col-6">
                          <p>Subtotal</p>
                        </div>
                        <div className="col-6">
                          <h3 style={{ float: "right" }}>₹450.30</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-6">
                          <h2>
                            <b>Total</b>
                          </h2>
                        </div>
                        <div className="col-6">
                          <h3 style={{ float: "right" }}>₹450.30</h3>
                        </div>
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
