import React, { useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const productsData = [
  {
    id: 1,
    name: "Slim Fit Shirt",
    price: 29.99,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
    category: "Shirts",
    description: "A stylish slim fit shirt for all occasions."
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: 39.99,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    rating: 4.0,
    category: "Jeans",
    description: "Classic blue denim jeans."
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    price: 19.99,
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80",
    rating: 4.2,
    category: "T-Shirts",
    description: "Comfortable cotton t-shirt."
  },
  {
    id: 4,
    name: "Formal Blazer",
    price: 59.99,
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    category: "Blazers",
    description: "Elegant formal blazer for business and events."
  },
  {
    id: 5,
    name: "Chinos",
    price: 34.99,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    rating: 4.3,
    category: "Pants",
    description: "Versatile chinos for work and play."
  }
];

const categories = ["All", "Shirts", "Jeans", "T-Shirts", "Blazers", "Pants"];

const MensClothing = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);

  // Filter products by search and category
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
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
                  <img src={product.img} alt={product.name} style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />
                  <h6 style={{ fontWeight: 600, margin: "8px 0 4px 0" }}>{product.name}</h6>
                  <Rating value={product.rating} precision={0.1} readOnly size="small" style={{ marginBottom: 6 }} />
                  <div style={{ fontWeight: 500, color: "#1976d2", marginBottom: 8 }}>${product.price.toFixed(2)}</div>
                  <Button variant="contained" color="primary" size="small" style={{ marginBottom: 6 }} onClick={() => handleAddToCart(product)}>
                    Add to Cart
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
            <img src={modalProduct.img} alt={modalProduct.name} style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8, marginBottom: 16 }} />
            <h4 style={{ fontWeight: 700 }}>{modalProduct.name}</h4>
            <Rating value={modalProduct.rating} precision={0.1} readOnly size="medium" style={{ marginBottom: 8 }} />
            <div style={{ fontWeight: 500, color: "#1976d2", marginBottom: 8 }}>${modalProduct.price.toFixed(2)}</div>
            <p style={{ color: "#555" }}>{modalProduct.description}</p>
            <Button variant="contained" color="primary" fullWidth onClick={() => { handleAddToCart(modalProduct); setModalProduct(null); }}>
              Add to Cart
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
