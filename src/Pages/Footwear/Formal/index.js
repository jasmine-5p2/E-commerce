import React, { useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { FaCheck } from "react-icons/fa";
import { useCart } from "../../../context/CartContext"; // ⚠️ ADJUST PATH BASED ON YOUR FOLDER STRUCTURE

const products = [
  {
    id: 41, // ⚠️ CHANGED from 1
    name: "Oxford Shoes",
    price: 69.99,
    image: "https://tse2.mm.bing.net/th/id/OIP.Nu5K7Jo9WN4PsJxAc1c9ygHaHa?pid=Api&P=0&h=180", // ⚠️ CHANGED: 'img' to 'image' + better oxford image
    rating: 4.8,
    category: "Men's Footwear", // ⚠️ ADDED
    description: "Classic oxford shoes for formal occasions."
  },
  {
    id: 42, // ⚠️ CHANGED from 2
    name: "Derby Shoes",
    price: 64.99,
    image: "https://tse2.mm.bing.net/th/id/OIP.Nu5K7Jo9WN4PsJxAc1c9ygHaHa?pid=Api&P=0&h=180", // ⚠️ CHANGED: 'img' to 'image' + better derby image
    rating: 4.6,
    category: "Men's Footwear", // ⚠️ ADDED
    description: "Elegant derby shoes for office and events."
  },
  {
    id: 43, // ⚠️ CHANGED from 3
    name: "Monk Strap Shoes",
    price: 74.99,
    image: "https://tse2.mm.bing.net/th/id/OIP.Nu5K7Jo9WN4PsJxAc1c9ygHaHa?pid=Api&P=0&h=180", // ⚠️ CHANGED: 'img' to 'image' + better monk strap image
    rating: 4.7,
    category: "Men's Footwear", // ⚠️ ADDED
    description: "Stylish monk strap shoes for a modern look."
  },
  {
    id: 44, // ⚠️ CHANGED from 4
    name: "Formal Loafers",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?auto=format&fit=crop&w=400&q=80", // ⚠️ CHANGED: 'img' to 'image' + better loafer image
    rating: 4.5,
    category: "Men's Footwear", // ⚠️ ADDED
    description: "Comfortable loafers for formal wear."
  }
];

const FormalFootwear = () => {
  const { addToCart } = useCart(); // ⚠️ ADDED: Use CartContext
  const [modalProduct, setModalProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState({}); // ⚠️ ADDED: Visual feedback state

  // ⚠️ REMOVED: Local cart state

  // ⚠️ UPDATED: handleAddToCart now uses CartContext
  const handleAddToCart = (product) => {
    try {
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
      <h2 style={{ fontWeight: 700, marginBottom: 8 }}>Formal Footwear</h2>
      <p style={{ color: "#555", marginBottom: 24 }}>Find elegant formal shoes for office and special occasions.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
        {products.map(product => (
          <div key={product.id} style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: 16, display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* ⚠️ CHANGED: 'img' to 'image' */}
            <img src={product.image} alt={product.name} style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />
            <h6 style={{ fontWeight: 600, margin: "8px 0 4px 0" }}>{product.name}</h6>
            <Rating value={product.rating} precision={0.1} readOnly size="small" style={{ marginBottom: 6 }} />
            <div style={{ fontWeight: 500, color: "#1976d2", marginBottom: 8 }}>${product.price.toFixed(2)}</div>
            {/* ⚠️ UPDATED: Button with visual feedback */}
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
            {/* ⚠️ CHANGED: 'img' to 'image' */}
            <img src={modalProduct.image} alt={modalProduct.name} style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8, marginBottom: 16 }} />
            <h4 style={{ fontWeight: 700 }}>{modalProduct.name}</h4>
            <Rating value={modalProduct.rating} precision={0.1} readOnly size="medium" style={{ marginBottom: 8 }} />
            <div style={{ fontWeight: 500, color: "#1976d2", marginBottom: 8 }}>${modalProduct.price.toFixed(2)}</div>
            <p style={{ color: "#555" }}>{modalProduct.description}</p>
            {/* ⚠️ UPDATED: Button with visual feedback */}
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

export default FormalFootwear;