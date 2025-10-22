import React, { useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { FaCheck } from "react-icons/fa";

const smartWatches = [
  {
    id: 1,
    name: "Fitness Smart Watch",
    price: "$180",
    image: "https://tse1.mm.bing.net/th/id/OIP.VblaDooTIHdWXeO600SO8wHaHa?pid=Api&P=0&h=180",
    rating: 4.8,
    description: "Heart rate monitor, GPS, waterproof."
  },
  {
    id: 2,
    name: "Business Smart Watch",
    price: "$220",
    image: "https://tse1.mm.bing.net/th/id/OIP.VblaDooTIHdWXeO600SO8wHaHa?pid=Api&P=0&h=180",
    rating: 4.6,
    description: "Notifications, calendar sync, premium design."
  },
  {
    id: 3,
    name: "Kids Smart Watch",
    price: "$90",
    image: "https://tse1.mm.bing.net/th/id/OIP.VblaDooTIHdWXeO600SO8wHaHa?pid=Api&P=0&h=180",
    rating: 4.3,
    description: "GPS tracker, games, parental controls."
  }
];

const Smart = () => {
  const [selected, setSelected] = useState(null);
  const [addedToCart, setAddedToCart] = useState({});

  const handleQuickView = (watch) => setSelected(watch);
  const handleCloseModal = () => setSelected(null);

  const handleAddToCart = (watch) => {
    setAddedToCart(prev => ({ ...prev, [watch.id]: true }));
    setTimeout(() => setAddedToCart(prev => ({ ...prev, [watch.id]: false })), 2000);
  };

  return (
    <div className="container py-5">
      <h2>Smart Watches</h2>
      <p>Shop the latest smart watches with advanced features.</p>

      <div className="row">
        {smartWatches.map((watch) => (
          <div className="col-md-4 mb-4" key={watch.id}>
            <div className="card h-100">
              <img
                src={watch.image}
                alt={watch.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{watch.name}</h5>
                <p className="card-text">{watch.price}</p>
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
                  <Button variant="outlined" color="secondary" onClick={() => handleQuickView(watch)}>
                    Quick View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {selected && (
        <div className="modal show" style={{ display: "block", background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selected.name}</h5>
                <Button onClick={handleCloseModal}>&times;</Button>
              </div>
              <div className="modal-body">
                <img
                  src={selected.image}
                  alt={selected.name}
                  style={{ width: "100%", height: "200px", objectFit: "contain" }}
                />
                <p>{selected.description}</p>
                <p>Price: {selected.price}</p>
                <Rating value={selected.rating} precision={0.5} readOnly />
              </div>
              <div className="modal-footer">
                <Button
                  variant="contained"
                  color={addedToCart[selected.id] ? "success" : "primary"}
                  fullWidth
                  onClick={() => { handleAddToCart(selected); setTimeout(() => setSelected(null), 1500); }}
                  startIcon={addedToCart[selected.id] ? <FaCheck /> : null}
                >
                  {addedToCart[selected.id] ? "Added!" : "Add to Cart"}
                </Button>
                <Button variant="outlined" color="secondary" fullWidth onClick={handleCloseModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Smart;
