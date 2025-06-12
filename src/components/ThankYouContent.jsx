import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ThankYouContent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate('/');
    return null;
  }

  const { orderNumber, date, total, paymentMethod, products, billing } = state;

  return (
    <section className="thank-you-area">
      <div className="container">
        <div className="order-message">
          <p className="thank-you-txt">Thank you, {billing.name}. Your order has been received.</p>
          <ul className="d-flex mt-4" style={{ flexWrap: 'wrap', gap: '2rem' }}>
            <li><p>Order Number:</p><h4>{orderNumber}</h4></li>
            <li><p>Date:</p><h4>{date}</h4></li>
            <li><p>Total:</p><h4>{total}</h4></li>
            <li><p>Payment method:</p><h4>{paymentMethod}</h4></li>
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
              {products.map((item, index) => (
                <tr key={index}>
                  <td>{item.name} × {item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
              <tr>
                <td>Subtotal :</td>
                <td>{total}</td>
              </tr>
              <tr>
                <td>Payment Method :</td>
                <td>{paymentMethod}</td>
              </tr>
              <tr>
                <td><b>Total :</b></td>
                <td><b>{total}</b></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="billing-address">
          <h3 className="mb-3">Billing Information</h3>
          <div className="billing-box">
            <ul>
              <li><p><b>Name :</b> {billing.name}</p></li>
              <li><p><b>Address :</b> {billing.address}</p></li>
              <li><p><b>Address1 :</b> {billing.address1}</p></li>
              <li><p><b>State :</b> {billing.state}</p></li>
              <li><p><b>Pin :</b> {billing.pin}</p></li>
              <li><p><b>Phone :</b> {billing.phone}</p></li>
              <li><p><b>Email :</b> {billing.email}</p></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouContent;
