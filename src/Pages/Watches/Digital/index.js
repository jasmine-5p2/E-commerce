import React, { useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { FaCheck } from "react-icons/fa";
import { useCart } from "../../../context/CartContext"; // use your CartContext

const digitalWatches = [
  {
    id: 201,
    name: "Sport Digital Watch",
    price: 80,
    image: "https://tse4.mm.bing.net/th/id/OIP.dVdxBpTb5uN8YW7LWnPDhwHaHa?pid=Api&P=0&h=180",
    rating: 4.2,
    description: "Shock resistant, stopwatch, LED display."
  },
  {
    id: 202,
    name: "Waterproof Digital Watch",
    price: 110,
    image:"https://tse4.mm.bing.net/th/id/OIP.dVdxBpTb5uN8YW7LWnPDhwHaHa?pid=Api&P=0&h=180",
    rating: 4.7,
    description: "Waterproof up to 50m, alarm, backlight."
  },
  {
    id: 203,
    name: "Minimalist Digital Watch",
    price: 65,
    image:"https://tse4.mm.bing.net/th/id/OIP.dVdxBpTb5uN8YW7LWnPDhwHaHa?pid=Api&P=0&h=180",
    rating: 4.0,
    description: "Slim design, easy to read, battery saver."
  }
];

const Digital = () => {
  const { addToCart } = useCart(); // shared cart context
  const [selected, setSelected] = useState(null);
  const [addedToCart, setAddedToCart] = useState({}); // visual feedback

  const handleAddToCart = (watch) => {
    addToCart(watch);
    setAddedToCart(prev => ({ ...prev, [watch.id]: true }));
    setTimeout(() => setAddedToCart(prev => ({ ...prev, [watch.id]: false })), 2000);
  };

  const handleQuickView = (watch) => {
    setSelected(watch);
  };

  const handleCloseModal = () => {
    setSelected(null);
  };

  return (
    <div className="container py-5">
      <h2>Digital Watches</h2>
      <p>Discover our range of modern digital watches.</p>
      <div className="row">
        {digitalWatches.map((watch) => (
          <div className="col-md-4 mb-4" key={watch.id}>
            <div className="card h-100">
              <img src={watch.image} alt={watch.name} className="card-img-top" style={{height: "200px", objectFit: "contain"}} />
              <div className="card-body">
                <h5 className="card-title">{watch.name}</h5>
                <p className="card-text">${watch.price}</p>
                <Rating value={watch.rating} precision={0.5} readOnly />
                <div className="d-flex justify-content-between mt-3">
                  <Button
                    variant="contained"
                    color={addedToCart[watch.id] ? "success" : "primary"}
                    onClick={() => handleAddToCart(watch)}
                    startIcon={addedToCart[watch.id] ? <FaCheck /> : null}
                  >
                    {addedToCart[watch.id] ? "Added!" : "Add to Cart"}
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => handleQuickView(watch)}>Quick View</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {selected && (
        <div className="modal show" style={{display: "block", background: "rgba(0,0,0,0.5)"}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selected.name}</h5>
                <Button onClick={handleCloseModal}>&times;</Button>
              </div>
              <div className="modal-body">
                <img src={selected.image} alt={selected.name} style={{width: "100%", height: "200px", objectFit: "contain"}} />
                <p>{selected.description}</p>
                <p>Price: ${selected.price}</p>
                <Rating value={selected.rating} precision={0.5} readOnly />
              </div>
              <div className="modal-footer">
                <Button
                  variant="contained"
                  color={addedToCart[selected.id] ? "success" : "primary"}
                  onClick={() => { handleAddToCart(selected); handleCloseModal(); }}
                  startIcon={addedToCart[selected.id] ? <FaCheck /> : null}
                >
                  {addedToCart[selected.id] ? "Added!" : "Add to Cart"}
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleCloseModal}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Digital;
