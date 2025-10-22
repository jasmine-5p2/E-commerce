import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from 'react-router-dom'; // Add this import

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, getTotalItems } = useCart();
  const navigate = useNavigate(); // Add this hook

  const getItemTotal = (price, quantity) => (price * quantity).toFixed(2);

  // Handle checkout navigation
  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <>
      <section className="section">
        <div className="container">
          <h2 className="hd">Cart</h2>
          <div style={{textAlign: 'center', padding: '3rem', background: '#f8f9fa', borderRadius: '8px', margin: '2rem 0'}}>
            <h3>Your cart is empty</h3>
            <p>Browse our categories and add some products to get started!</p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem'}}>
              <a href="/mens" className="btn btn-primary">Men's Collection</a>
              <a href="/womens" className="btn btn-primary">Women's Collection</a>
              <a href="/watches" className="btn btn-primary">Watches</a>
              <a href="/footwear" className="btn btn-primary">Footwear</a>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }

  return (
    <>
    <section className="section">
      <div className="container">
        <h2 className="hd">Cart</h2>
        <p>There are <b>{getTotalItems()}</b> products in your cart from different categories.</p>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                      <img src={item.image || "https://via.placeholder.com/60x60"} alt={item.name} style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px'}} />
                      <div>
                        <h5 style={{margin: 0, fontSize: '1rem'}}>{item.name}</h5>
                        <small style={{color: '#666'}}>From {item.source || item.category} collection</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-secondary">{item.category}</span>
                  </td>
                  <td style={{fontWeight: '600', color: '#007bff'}}>${item.price}</td>
                  <td>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{width: '30px', height: '30px', padding: 0}}
                      >
                        -
                      </button>
                      <span style={{padding: '0.25rem 0.75rem', border: '1px solid #ddd', borderRadius: '4px', minWidth: '50px', textAlign: 'center'}}>
                        {item.quantity}
                      </span>
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{width: '30px', height: '30px', padding: 0}}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td style={{fontWeight: '600', color: '#28a745'}}>${getItemTotal(item.price, item.quantity)}</td>
                  <td>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap'}}>
          <div style={{flex: '1', minWidth: '300px'}}>
            <h4>Continue Shopping</h4>
            <p>Browse more products from our collections:</p>
            <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              <a href="/mens" className="btn btn-outline-primary btn-sm">Men's</a>
              <a href="/womens" className="btn btn-outline-primary btn-sm">Women's</a>
              <a href="/watches" className="btn btn-outline-primary btn-sm">Watches</a>
              <a href="/footwear" className="btn btn-outline-primary btn-sm">Footwear</a>
            </div>
          </div>
          
          <div style={{flex: '1', minWidth: '300px', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
            <h4>Order Summary</h4>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0'}}>
              <span>Subtotal ({getTotalItems()} items):</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0'}}>
              <span>Shipping:</span>
              <span style={{color: '#28a745'}}>Free</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderTop: '2px solid #007bff', fontWeight: 'bold', fontSize: '1.2rem', color: '#007bff'}}>
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div style={{marginTop: '1rem'}}>
              <button 
                className="btn btn-primary btn-block" 
                style={{width: '100%', marginBottom: '0.5rem'}}
                onClick={handleCheckout} // Add onClick handler
              >
                Proceed to Checkout
              </button>
              <button className="btn btn-outline-secondary btn-block" style={{width: '100%'}}>
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Cart;