import React, { useState, useContext } from 'react';
import { useCart } from "../../context/CartContext";
import { MyContext } from "../../App";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems = [], getCartTotal, clearCart, getTotalItems } = useCart();
  const { countryList = [] } = useContext(MyContext);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    cardExpiry: '',
    cvv: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    const { firstName, lastName, email, address, city, state, zipCode, country, cardNumber, cardExpiry, cvv } = formData;

    if (!firstName.trim()) errors.firstName = 'First name is required';
    if (!lastName.trim()) errors.lastName = 'Last name is required';
    if (!email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Invalid email';
    if (!address.trim()) errors.address = 'Address is required';
    if (!city.trim()) errors.city = 'City is required';
    if (!state.trim()) errors.state = 'State is required';
    if (!zipCode.trim()) errors.zipCode = 'ZIP code is required';
    if (!country) errors.country = 'Please select a country';

    if (!cardNumber.trim()) errors.cardNumber = 'Card number is required';
    else if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) errors.cardNumber = 'Invalid card number';
    if (!cardExpiry.trim()) errors.cardExpiry = 'Expiry date is required';
    else if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) errors.cardExpiry = 'Invalid format (MM/YY)';
    if (!cvv.trim()) errors.cvv = 'CVV is required';
    else if (!/^\d{3,4}$/.test(cvv)) errors.cvv = 'Invalid CVV';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cartItems || cartItems.length === 0) return alert("Cart is empty");

    if (!validateForm()) return;

    setIsProcessing(true);
    try {
      const now = new Date();
      const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');

      const subtotal = getCartTotal() || 0;
      const total = subtotal;

      const orderData = {
        orderId: 'ORD-' + Date.now().toString(36).toUpperCase(),
        orderDate: formattedDate,
        customerInfo: {
          id: 'jasmine-5p2',
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email
        },
        items: cartItems.map(item => ({ ...item, itemTotal: item.price * item.quantity })),
        shipping: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: formData.country
        },
        payment: {
          method: 'Credit Card',
          cardLast4: formData.cardNumber.slice(-4),
          status: 'Paid',
          transactionTime: formattedDate
        },
        summary: {
          subtotal,
          shipping: 0,
          total,
          itemCount: getTotalItems() || 0
        }
      };

      console.log("Order Data:", orderData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Clear cart and navigate
      clearCart();
      navigate('/receipt', { state: { orderData, success: true } });

    } catch (error) {
      console.error("Order processing error:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Show empty cart message
  if (!cartItems || cartItems.length === 0) {
    return (
      <section className="section">
        <div className="container text-center py-5">
          <h2>Checkout</h2>
          <div className="alert alert-warning my-4">
            Your cart is empty. Please add products before proceeding.
          </div>
          <a href="/" className="btn btn-primary">Continue Shopping</a>
        </div>
      </section>
    );
  }

  return (
    <section className="section py-5">
      <div className="container">
        <h2 className="mb-4">Checkout ({getTotalItems() || 0} items)</h2>
        <div className="row">
          {/* Left - Form */}
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              {/* Shipping */}
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title mb-3">Shipping Information</h4>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" placeholder="First Name" name="firstName"
                        className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                        value={formData.firstName} onChange={handleInputChange} />
                      {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Last Name" name="lastName"
                        className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                        value={formData.lastName} onChange={handleInputChange} />
                      {formErrors.lastName && <div className="invalid-feedback">{formErrors.lastName}</div>}
                    </div>
                    <div className="col-12">
                      <input type="email" placeholder="Email" name="email"
                        className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                        value={formData.email} onChange={handleInputChange} />
                      {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                    </div>
                    <div className="col-12">
                      <input type="text" placeholder="Address" name="address"
                        className={`form-control ${formErrors.address ? 'is-invalid' : ''}`}
                        value={formData.address} onChange={handleInputChange} />
                      {formErrors.address && <div className="invalid-feedback">{formErrors.address}</div>}
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="City" name="city"
                        className={`form-control ${formErrors.city ? 'is-invalid' : ''}`}
                        value={formData.city} onChange={handleInputChange} />
                      {formErrors.city && <div className="invalid-feedback">{formErrors.city}</div>}
                    </div>
                    <div className="col-md-4">
                      <input type="text" placeholder="State" name="state"
                        className={`form-control ${formErrors.state ? 'is-invalid' : ''}`}
                        value={formData.state} onChange={handleInputChange} />
                      {formErrors.state && <div className="invalid-feedback">{formErrors.state}</div>}
                    </div>
                    <div className="col-md-2">
                      <input type="text" placeholder="ZIP" name="zipCode"
                        className={`form-control ${formErrors.zipCode ? 'is-invalid' : ''}`}
                        value={formData.zipCode} onChange={handleInputChange} />
                      {formErrors.zipCode && <div className="invalid-feedback">{formErrors.zipCode}</div>}
                    </div>
                    <div className="col-12">
                      <select name="country" value={formData.country}
                        className={`form-select ${formErrors.country ? 'is-invalid' : ''}`}
                        onChange={handleInputChange}>
                        <option value="">Select Country</option>
                        {countryList.map((c, i) => <option key={i} value={c.country}>{c.country}</option>)}
                      </select>
                      {formErrors.country && <div className="invalid-feedback">{formErrors.country}</div>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title mb-3">Payment Information</h4>
                  <div className="row g-3">
                    <div className="col-12">
                      <input type="text" placeholder="Card Number" name="cardNumber"
                        className={`form-control ${formErrors.cardNumber ? 'is-invalid' : ''}`}
                        value={formData.cardNumber} onChange={handleInputChange} maxLength={16} />
                      {formErrors.cardNumber && <div className="invalid-feedback">{formErrors.cardNumber}</div>}
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="MM/YY" name="cardExpiry"
                        className={`form-control ${formErrors.cardExpiry ? 'is-invalid' : ''}`}
                        value={formData.cardExpiry} onChange={handleInputChange} maxLength={5} />
                      {formErrors.cardExpiry && <div className="invalid-feedback">{formErrors.cardExpiry}</div>}
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="CVV" name="cvv"
                        className={`form-control ${formErrors.cvv ? 'is-invalid' : ''}`}
                        value={formData.cvv} onChange={handleInputChange} maxLength={4} />
                      {formErrors.cvv && <div className="invalid-feedback">{formErrors.cvv}</div>}
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 btn-lg" disabled={isProcessing}>
                {isProcessing ? "Processing..." : `Place Order ($${getCartTotal().toFixed(2)})`}
              </button>
            </form>
          </div>

          {/* Right - Summary */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4>Order Summary</h4>
                {cartItems.map(item => (
                  <div key={item.id} className="d-flex justify-content-between mb-2">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total:</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
