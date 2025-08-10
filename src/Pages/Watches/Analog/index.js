import React, { useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const analogWatches = [
  {
    id: 1,
    name: "Classic Leather Analog Watch",
    price: "$120",
    image: require("../../../asserts/images/logo.png"),
    rating: 4.5,
    description: "Elegant leather strap, water resistant, timeless design."
  },
  {
    id: 2,
    name: "Minimalist Silver Analog Watch",
    price: "$95",
    image: require("../../../asserts/images/logo1.png"),
    rating: 4.0,
    description: "Sleek silver finish, minimalist dial, perfect for any occasion."
  },
  {
    id: 3,
    name: "Vintage Gold Analog Watch",
    price: "$150",
    image: require("../../../asserts/images/logo.png"),
    rating: 5.0,
    description: "Classic gold tone, vintage look, premium build."
  }
];

const Analog = () => {
  const [selected, setSelected] = useState(null);

  const handleQuickView = (watch) => {
    setSelected(watch);
  };

  const handleCloseModal = () => {
    setSelected(null);
  };

  return (
    <div className="container py-5">
      <h2>Analog Watches</h2>
      <p>Explore our collection of classic analog watches.</p>
      <div className="row">
        {analogWatches.map((watch) => (
          <div className="col-md-4 mb-4" key={watch.id}>
            <div className="card h-100">
              <img src={watch.image} alt={watch.name} className="card-img-top" style={{height: "200px", objectFit: "contain"}} />
              <div className="card-body">
                <h5 className="card-title">{watch.name}</h5>
                <p className="card-text">{watch.price}</p>
                <Rating value={watch.rating} precision={0.5} readOnly />
                <div className="d-flex justify-content-between mt-3">
                  <Button variant="contained" color="primary">Add to Cart</Button>
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
                <p>Price: {selected.price}</p>
                <Rating value={selected.rating} precision={0.5} readOnly />
              </div>
              <div className="modal-footer">
                <Button variant="contained" color="primary">Add to Cart</Button>
                <Button variant="outlined" color="secondary" onClick={handleCloseModal}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analog;
