import React from 'react'

const ThankYouContent = () => {
  return (
    <div>
      <section className="thank-you-area shadow">
        <div className="container">
          <div className="order-message">
            <p className="thank-you-txt">Thank you, test. Your order has been received.</p>
            <ul className="d-flex mt-4" style={{ flexWrap: 'wrap', gap: '2rem' }}>
              <li>
                <p>Order Number:</p>
                <h4>133</h4>
              </li>
              <li>
                <p>Date:</p>
                <h4>6/12/2025</h4>
              </li>
              <li>
                <p>Total:</p>
                <h4>₹450.30</h4>
              </li>
              <li>
                <p>Payment method:</p>
                <h4>Cash on delivery</h4>
              </li>
            </ul>
          </div>

          <div className="customer-order-details">
            <h3 className="mb-3">Order Details</h3>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HD Television × 1</td>
                  <td>₹450.30</td>
                </tr>
                <tr>
                  <td>Subtotal :</td>
                  <td>₹450.30</td>
                </tr>
                <tr>
                  <td>Payment Method :</td>
                  <td>Cash on delivery</td>
                </tr>
                <tr>
                  <td>
                    <b>Total :</b>
                  </td>
                  <td>
                    <b>₹450.30</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="billing-address">
            <h3 className="mb-3">Billing Information</h3>
            <div className="billing-box">
              <ul>
                <li>
                  <p>
                    <b>Name :</b> test test
                  </p>
                </li>
                <li>
                  <p>
                    <b>Address :</b> test
                  </p>
                </li>
                <li>
                  <p>
                    <b>Address1 :</b> test 00000
                  </p>
                </li>
                <li>
                  <p>
                    <b>State :</b> West Bengal
                  </p>
                </li>
                <li>
                  <p>
                    <b>Phone :</b> 0000000000
                  </p>
                </li>
                <li>
                  <p>
                    <b>Email :</b> testsub77@test.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ThankYouContent
