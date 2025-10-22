import React, { useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { FaCheck } from "react-icons/fa";
import { useCart } from "../../../context/CartContext"; // ⚠️ ADJUST PATH BASED ON YOUR FOLDER STRUCTURE

const productsData = [
  {
    id: 11, // ⚠️ CHANGED: Unique ID (don't conflict with accessories)
    name: "Slim Fit Shirt",
    price: 29.99,
    image: "https://sp.yimg.com/ib/th?id=OPAC.Zo1qrqUZVG1ztw474C474&o=5&pid=21.1&w=174&h=174", // ⚠️ CHANGED: 'img' to 'image'
    rating: 4.5,
    category: "Men's Clothing", // ⚠️ CHANGED: Main category for cart display
    subcategory: "Shirts", // ⚠️ ADDED: For filtering
    description: "A stylish slim fit shirt for all occasions."
  },
  {
    id: 12, // ⚠️ CHANGED: Unique ID
    name: "Denim Jeans",
    price: 39.99,
    image: "https://sp.yimg.com/ib/th?id=OPAC.o6b1So1vVaDKng474C474&o=5&pid=21.1&w=174&h=174", // ⚠️ CHANGED
    rating: 4.0,
    category: "Men's Clothing", // ⚠️ CHANGED
    subcategory: "Jeans", // ⚠️ ADDED
    description: "Classic blue denim jeans."
  },
  {
    id: 13, // ⚠️ CHANGED: Unique ID
    name: "Casual T-Shirt",
    price: 19.99,
    image: "https://sp.yimg.com/ib/th?id=OPAC.NqYP9rwu2MqJ6g474C474&o=5&pid=21.1&w=174&h=174", // ⚠️ CHANGED
    rating: 4.2,
    category: "Men's Clothing", // ⚠️ CHANGED
    subcategory: "T-Shirts", // ⚠️ ADDED
    description: "Comfortable cotton t-shirt."
  },
  {
    id: 14, // ⚠️ CHANGED: Unique ID
    name: "Formal Blazer",
    price: 59.99,
    image: "https://sp.yimg.com/ib/th?id=OPAC.7oEMqjwkt42rqA474C474&o=5&pid=21.1&w=174&h=174", // ⚠️ CHANGED
    rating: 4.8,
    category: "Men's Clothing", // ⚠️ CHANGED
    subcategory: "Blazers", // ⚠️ ADDED
    description: "Elegant formal blazer for business and events."
  },
  {
    id: 15, // ⚠️ CHANGED: Unique ID
    name: "Casual T-Shirt",
    price: 19.99,
    image: "https://sp.yimg.com/ib/th?id=OPAC.NqYP9rwu2MqJ6g474C474&o=5&pid=21.1&w=174&h=174", // ⚠️ CHANGED
    rating: 4.2,
    category: "Men's Clothing", // ⚠️ CHANGED
    subcategory: "T-Shirts", // ⚠️ ADDED
    description: "Comfortable cotton t-shirt."
  },
  {
    id: 16, // ⚠️ CHANGED: Unique ID
    name: "Casual T-Shirt",
    price: 19.99,
    image: "https://sp.yimg.com/ib/th?id=OPAC.NqYP9rwu2MqJ6g474C474&o=5&pid=21.1&w=174&h=174", // ⚠️ CHANGED
    rating: 4.2,
    category: "Men's Clothing", // ⚠️ CHANGED
    subcategory: "T-Shirts", // ⚠️ ADDED
    description: "Comfortable cotton t-shirt."
  },
    {
    id: 17, // ⚠️ CHANGED: Unique ID (don't conflict with accessories)
    name: "Slim Fit Shirt",
    price: 29.99,
    image: "https://sp.yimg.com/ib/th?id=OPAC.Zo1qrqUZVG1ztw474C474&o=5&pid=21.1&w=174&h=174", // ⚠️ CHANGED: 'img' to 'image'
    rating: 4.5,
    category: "Men's Clothing", // ⚠️ CHANGED: Main category for cart display
    subcategory: "Shirts", // ⚠️ ADDED: For filtering
    description: "A stylish slim fit shirt for all occasions."
  },
    {
    id: 18, // ⚠️ CHANGED: Unique ID (don't conflict with accessories)
    name: "Slim Fit Shirt",
    price: 29.99,
    image: "https://sp.yimg.com/ib/th?id=OPAC.Zo1qrqUZVG1ztw474C474&o=5&pid=21.1&w=174&h=174", // ⚠️ CHANGED: 'img' to 'image'
    rating: 4.5,
    category: "Men's Clothing", // ⚠️ CHANGED: Main category for cart display
    subcategory: "Shirts", // ⚠️ ADDED: For filtering
    description: "A stylish slim fit shirt for all occasions."
  },
];

const categories = ["All", "Shirts", "Jeans", "T-Shirts", "Blazers", "Pants"];

const MensClothing = () => {
  const { addToCart } = useCart(); // ⚠️ ADDED: Use CartContext
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalProduct, setModalProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState({}); // ⚠️ ADDED: Visual feedback state

  // ⚠️ REMOVED: Local cart state (no longer needed)

  // Filter products by search and category
  const filteredProducts = productsData.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.subcategory === selectedCategory; // ⚠️ CHANGED: Use subcategory
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
      <h2 style={{ fontWeight: 700, marginBottom: 8 }}>Men's Clothing</h2>
      <p style={{ color: "#555", marginBottom: 24 }}>Browse the latest styles in men's clothing.</p>
      <div style={{ display: "flex", gap: 32 }}>
        {/* Sidebar */}
        <aside style={{ minWidth: 180 }}>
          <h5 style={{ fontWeight: 600, marginBottom: 16 }}>Categories</h5>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {categories.map(cat => (
              <li key={cat}>
                <Button
                  variant={selectedCategory === cat ? "contained" : "text"}
                  color="primary"
                  size="small"
                  style={{ marginBottom: 8, width: "100%" }}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1 }}>
          {/* Search Bar */}
          <div style={{ marginBottom: 24 }}>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #ccc", width: "100%", maxWidth: 350 }}
            />
          </div>

          {/* Product Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {filteredProducts.length === 0 ? (
              <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#888" }}>No products found.</div>
            ) : (
              filteredProducts.map(product => (
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
              ))
            )}
          </div>
        </main>
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

export default MensClothing;