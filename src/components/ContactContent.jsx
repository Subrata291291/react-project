import React, { useState } from 'react';

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const form = new FormData();
    form.append('name', formData.name);
    form.append('phone', formData.phone);
    form.append('email', formData.email);
    form.append('message', formData.message);
  
    fetch('https://script.google.com/macros/s/AKfycbyMSjpUuMv6rnICDzrRKSVYS-EHOtTtQ34ifL_0SRh5FZ2yF9ynSE80pxelO41sYLYA/exec', {
      method: 'POST',
      body: form
    })
      .then((res) => res.text()) // Apps Script returns plain text
      .then((response) => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      })
      .catch((err) => {
        alert('There was an error submitting the form.');
        console.error(err);
      });
  };

  return (
    <section className="contact-area p-70">
      <div className="container">
        <div className="row gx-lg-5">
          {/* LEFT SIDE */}
          <div className="col-12 col-md-12 col-lg-6">
            <div
              className="contact-left"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <h3 className="contact-text">Contact Information</h3>
              <p className="contact-para">
                Fill the form below or write us. We will help you as soon as possible.
              </p>
              <ul className="d-md-flex contact-box">
                <li className='mb-4 mb-md-0'>
                  <p className="phone-icon">
                    <i className="fa-solid fa-square-phone-flip"></i>
                  </p>
                  <h3>Phone</h3>
                  <span>+3162439888</span>
                </li>
                <li>
                  <p className="phone-icon">
                    <i className="fa-solid fa-envelope-circle-check"></i>
                  </p>
                  <h3>Mail</h3>
                  <span>info.test@gmail.com</span>
                </li>
              </ul>

              <div className="address-area">
                <ul className="d-flex gx-md-5">
                  <li>
                    <p className="map-icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </p>
                  </li>
                  <li>
                    <h3>Address</h3>
                    <p>Winkelcentrum Galecop, De Kempenaerpark 3437 JV Nieuwegein</p>
                  </li>
                </ul>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.4404402584523!2d5.079592276504601!3d52.053503471942626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6657f200f7b1d%3A0x55b7940f978cdbf6!2sWinkelcentrum%20Galecop!5e0!3m2!1sen!2sin!4v1747626726160!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-12 col-md-12 col-lg-6">
            <div
              className="contact-right"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <h3 className="contact-heading text-center">Get In Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                  <label htmlFor="phone">Phone Number</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    style={{ height: '100px' }}
                    required
                  ></textarea>
                  <label htmlFor="message">Comments</label>
                </div>
                <div className="form-floating">
                  <button type="submit" className="submit_btn button w-100">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactContent;
