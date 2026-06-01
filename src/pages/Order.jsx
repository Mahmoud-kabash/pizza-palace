import { useState } from 'react';

export default function Order() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    service: 'delivery',
    guests: '1',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.fullname.trim() === '') {
      setError('Please enter your full name.');
      return;
    }
    if (formData.email.trim() === '') {
      setError('Please enter your email.');
      return;
    }
    if (formData.service === 'delivery' && formData.address.trim() === '') {
      setError('Please enter your delivery address.');
      return;
    }
    if (formData.date === '') {
      setError('Please select a date.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullname: '',
      email: '',
      phone: '',
      address: '',
      service: 'delivery',
      guests: '1',
      date: '',
      message: '',
    });
    setSubmitted(false);
    setError('');
  };

  return (
    <div className="container section">
      <h1 className="page-title">Order Now</h1>
      <p className="lead center-text">Order delivery, pickup, or reserve your table — we're just a few clicks away.</p>

      <div className="card">

        {submitted ? (
          <div className="success-box">
            <h3>Order Sent!</h3>
            <p>Thank you <strong>{formData.fullname}</strong>! We received your order for <strong>{formData.date}</strong>.</p>
            <button className="btn btn-primary" onClick={handleReset}>Place Another Order</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>

            {error !== '' ? <p className="error-msg">{error}</p> : null}

            <label>Full Name</label>
            <input type="text" name="fullname" placeholder="Enter your full name" value={formData.fullname} onChange={handleChange} />

            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />

            <label>Phone</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />

            <label>Service Type</label>
            <div className="inline-options">
              <label><input type="radio" name="service" value="delivery" checked={formData.service === 'delivery'} onChange={handleChange} /> Delivery</label>
              <label><input type="radio" name="service" value="pickup" checked={formData.service === 'pickup'} onChange={handleChange} /> Pickup</label>
              <label><input type="radio" name="service" value="dinein" checked={formData.service === 'dinein'} onChange={handleChange} /> Dine In</label>
            </div>

            {formData.service === 'delivery' ? (
              <div>
                <label>Delivery Address</label>
                <input type="text" name="address" placeholder="Enter your delivery address" value={formData.address} onChange={handleChange} />
              </div>
            ) : null}

            <label>Number of Guests</label>
            <select name="guests" value={formData.guests} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>

            <label>Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} />

            <label>Comments</label>
            <textarea name="message" rows="5" placeholder="Any special requests?" value={formData.message} onChange={handleChange}></textarea>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Send Order</button>
              <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
