import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Receipt = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderData } = location.state || {};

  // Format date to UTC YYYY-MM-DD HH:MM:SS
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toISOString().slice(0, 19).replace('T', ' ');
  };

  if (!orderData) {
    navigate('/');
    return null;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{ maxWidth: '800px', margin: '2rem auto' }}>
          <div className="card-body">
            <div className="text-center mb-4">
              <h2 className="hd">Order Confirmation</h2>
              <div className="alert alert-success" role="alert">
                <i className="fas fa-check-circle me-2"></i>
                Your order has been placed successfully!
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card bg-light mb-3">
                    <div className="card-body">
                      <p className="mb-1"><strong>Order ID:</strong> {orderData.orderId}</p>
                      <p className="mb-1"><strong>Date:</strong> {formatDate(orderData.orderDate)}</p>
                      <p className="mb-1"><strong>Customer ID:</strong> jasmine-5p2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h4 className="card-title">Shipping Information</h4>
                    <hr />
                    <p className="mb-1">
                      <strong>{orderData.shipping.firstName} {orderData.shipping.lastName}</strong>
                    </p>
                    <p className="mb-1">{orderData.shipping.address}</p>
                    <p className="mb-1">
                      {orderData.shipping.city}, {orderData.shipping.state} {orderData.shipping.zipCode}
                    </p>
                    <p className="mb-1">{orderData.shipping.country}</p>
                    <p className="mb-1">
                      <strong>Email:</strong> {orderData.shipping.email}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h4 className="card-title">Payment Information</h4>
                    <hr />
                    <p className="mb-1">
                      <strong>Payment Method:</strong> Credit Card
                    </p>
                    <p className="mb-1">
                      <strong>Card Number:</strong> ****{orderData.payment.cardLast4}
                    </p>
                    <p className="mb-1">
                      <strong>Payment Status:</strong> 
                      <span className="badge bg-success ms-2">Paid</span>
                    </p>
                    <p className="mb-1">
                      <strong>Transaction Time:</strong> {formatDate(orderData.orderDate)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h4 className="card-title">Order Details</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-light">
                      <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderData.items.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={item.image || "https://via.placeholder.com/50x50"}
                                alt={item.name}
                                style={{
                                  width: '50px',
                                  height: '50px',
                                  objectFit: 'cover',
                                  borderRadius: '4px',
                                  marginRight: '1rem'
                                }}
                              />
                              <span>{item.name}</span>
                            </div>
                          </td>
                          <td>{item.category}</td>
                          <td>${item.price}</td>
                          <td>{item.quantity}</td>
                          <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <div className="row justify-content-end">
                  <div className="col-md-5">
                    <div className="table-responsive">
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <td>Subtotal:</td>
                            <td className="text-end">${orderData.subtotal.toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td>Shipping:</td>
                            <td className="text-end text-success">Free</td>
                          </tr>
                          <tr className="border-top">
                            <td><strong>Total:</strong></td>
                            <td className="text-end"><strong>${orderData.total.toFixed(2)}</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3">
              <button
                className="btn btn-primary"
                onClick={() => window.print()}
              >
                <i className="fas fa-print me-2"></i>
                Print Receipt
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate('/')}
              >
                <i className="fas fa-shopping-cart me-2"></i>
                Continue Shopping
              </button>
            </div>

            <div className="text-center mt-4">
              <small className="text-muted">
                Thank you for shopping with us! If you have any questions about your order,
                please contact our customer service.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Receipt;