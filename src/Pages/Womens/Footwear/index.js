import React, { useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";


const products = [
  {
    id: 1,
    name: "Heeled Sandals",
    price: 44.99,
    img: "https://sp.yimg.com/ib/th?id=OPAC.6q7OscdqDKrsKw474C474&o=5&pid=21.1&w=160&h=105",
    rating: 4.7,
    description: "Elegant heeled sandals for parties and events."
  },
   {
    id: 3,
    name: "Heeled Sandals",
    price: 44.99,
    img: "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000015340161-OffWhite-IVORY-1000015340161_01-2100.jpg",
    rating: 4.7,
    description: "Elegant heeled sandals for parties and events."
  },
   {
    id: 4,
    name: "Heeled Sandals",
    price: 44.99,
    img: "https://tse1.mm.bing.net/th/id/OIP.h8386G2jDiQidiNwn3wDlgHaHa?pid=Api&P=0&h=180",
    rating: 4.7,
    description: "Elegant heeled sandals for parties and events."
  },
  {
    id: 2,
    name: "Sneakers",
    price: 39.99,
    img: "https://sp.yimg.com/ib/th?id=OPAC.hgvYV%2fxJDIM%2bIQ474C474&o=5&pid=21.1&w=160&h=105",
    rating: 4.5,
    description: "Trendy sneakers for everyday comfort."
  },
  {
    id: 7,
    name: "Ballet Flats",
    price: 29.99,
    img: "https://sp.yimg.com/ib/th?id=OPAC.zllxMQ%2f9LD0mKA474C474&o=5&pid=21.1&w=160&h=105",

    rating: 4.6,
    description: "Classic ballet flats for work and casual wear."
  },
  {
    id: 9,
    name: "Boots",
    price: 59.99,
    img: "https://sp.yimg.com/ib/th?id=OPAC.nXMceGbprhMWrQ474C474&o=5&pid=21.1&w=160&h=105",
    rating: 4.3,
    description: "Stylish boots for winter and fall."
  },
   {
    id: 7,
    name: "Ballet Flats",
    price: 29.99,
    img: "https://sp.yimg.com/ib/th?id=OPAC.zllxMQ%2f9LD0mKA474C474&o=5&pid=21.1&w=160&h=105",

    rating: 4.6,
    description: "Classic ballet flats for work and casual wear."
  },
  {
    id: 8,
    name: "Boots",
    price: 59.99,
    img: "https://sp.yimg.com/ib/th?id=OPAC.nXMceGbprhMWrQ474C474&o=5&pid=21.1&w=160&h=105",
    rating: 4.3,
    description: "Stylish boots for winter and fall."
  }
];

const WomensFootwear = () => {
  const [cart, setCart] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container py-5" style={{ maxWidth: 1200 }}>
      <h2 style={{ fontWeight: 700, marginBottom: 8 }}>Women's Footwear</h2>
      <p style={{ color: "#555", marginBottom: 24 }}>Discover the latest in women's shoes, sneakers, and sandals.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
        {products.map(product => (
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
        ))}
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

export default WomensFootwear;
