import React, { useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { FaCheck } from "react-icons/fa";
import { useCart } from "../../../context/CartContext";

const products = [
  {
    id: 1,
    name: "Leather Belt",
    price: 24.99,
    image: "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014256083-Brown-TAN-1000014256083_01-2100.jpg",
    rating: 4.4,
    description: "Premium leather belt for formal and casual wear.",
    category: "Men's Accessories"
  },
  {
    id: 2,
    name: "Wallet",
    price: 19.99,
    image: "https://sp.yimg.com/ib/th?id=OPAC.Mdu2%2b2sNiyHOJg474C474&o=5&pid=21.1&w=160&h=105",
    rating: 4.2,
    description: "Classic wallet with multiple compartments.",
    category: "Men's Accessories"
  },
  {
    id: 3,
    name: "Sunglasses",
    price: 29.99,
    image: "https://sp.yimg.com/ib/th?id=OPAC.NZhRKhuB2dFbWg474C474&o=5&pid=21.1&w=174&h=174",
    rating: 4.6,
    description: "Stylish sunglasses for sunny days.",
    category: "Men's Accessories"
  },
  {
    id: 4,
    name: "Watch",
    price: 59.99,
    image: "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014256083-Brown-TAN-1000014256083_01-2100.jpg",
    rating: 4.8,
    description: "Elegant wrist watch for men.",
    category: "Men's Accessories"
  },
  {
    id: 5,
    name: "Watch",
    price: 59.99,
    image: "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014256083-Brown-TAN-1000014256083_01-2100.jpg",
    rating: 4.8,
    description: "Elegant wrist watch for men.",
    category: "Men's Accessories"
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 29.99,
    image: "https://sp.yimg.com/ib/th?id=OPAC.NZhRKhuB2dFbWg474C474&o=5&pid=21.1&w=174&h=174",
    rating: 4.6,
    description: "Stylish sunglasses for sunny days.",
    category: "Men's Accessories"
  },
  {
    id: 7,
    name: "Leather Belt",
    price: 24.99,
    image: "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014256083-Brown-TAN-1000014256083_01-2100.jpg",
    rating: 4.4,
    description: "Premium leather belt for formal and casual wear.",
    category: "Men's Accessories"
  },
   {
    id: 8,
    name: "Wallet",
    price: 19.99,
    image: "https://sp.yimg.com/ib/th?id=OPAC.Mdu2%2b2sNiyHOJg474C474&o=5&pid=21.1&w=160&h=105",
    rating: 4.2,
    description: "Classic wallet with multiple compartments.",
    category: "Men's Accessories"
  }
  
];

const MensAccessories = () => {
  const { addToCart } = useCart();
  const [modalProduct, setModalProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    try {
      // Add product using CartContext
      addToCart(product);
      
      // Show visual feedback
      setAddedToCart(prev => ({ ...prev, [product.id]: true }));
      setTimeout(() => {
        setAddedToCart(prev => ({ ...prev, [product.id]: false }));
      }, 2000);
      
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart');
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: 1200 }}>
      <h2 style={{ fontWeight: 700, marginBottom: 8 }}>Men's Accessories</h2>
      <p style={{ color: "#555", marginBottom: 24 }}>Shop belts, wallets, sunglasses, and more for men.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
        {products.map(product => (
          <div key={product.id} style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: 16, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src={product.image} alt={product.name} style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />
            <h6 style={{ fontWeight: 600, margin: "8px 0 4px 0" }}>{product.name}</h6>
            <Rating value={product.rating} precision={0.1} readOnly size="small" style={{ marginBottom: 6 }} />
            <div style={{ fontWeight: 500, color: "#1976d2", marginBottom: 8 }}>${product.price.toFixed(2)}</div>
            <Button 
              variant="contained" 
              color={addedToCart[product.id] ? "success" : "primary"}
              size="small" 
              style={{ marginBottom: 6, minWidth: 120 }} 
              onClick={() => handleAddToCart(product)}
              startIcon={addedToCart[product.id] ? <FaCheck /> : null}
            >
              {addedToCart[product.id] ? "Added!" : "Add to Cart"}
            </Button>
            <Button variant="outlined" size="small" onClick={() => setModalProduct(product)}>
              Quick View
            </Button>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {modalProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999 }} onClick={() => setModalProduct(null)}>
          <div style={{ background: "#fff", borderRadius: 12, padding: 32, minWidth: 320, maxWidth: 400, boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }} onClick={e => e.stopPropagation()}>
            <img src={modalProduct.image} alt={modalProduct.name} style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8, marginBottom: 16 }} />
            <h4 style={{ fontWeight: 700 }}>{modalProduct.name}</h4>
            <Rating value={modalProduct.rating} precision={0.1} readOnly size="medium" style={{ marginBottom: 8 }} />
            <div style={{ fontWeight: 500, color: "#1976d2", marginBottom: 8 }}>${modalProduct.price.toFixed(2)}</div>
            <p style={{ color: "#555" }}>{modalProduct.description}</p>
            <Button 
              variant="contained" 
              color={addedToCart[modalProduct.id] ? "success" : "primary"}
              fullWidth 
              onClick={() => { 
                handleAddToCart(modalProduct); 
                setTimeout(() => setModalProduct(null), 1500);
              }}
              startIcon={addedToCart[modalProduct.id] ? <FaCheck /> : null}
            >
              {addedToCart[modalProduct.id] ? "Added to Cart!" : "Add to Cart"}
            </Button>
            <Button variant="text" fullWidth style={{ marginTop: 8 }} onClick={() => setModalProduct(null)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MensAccessories;