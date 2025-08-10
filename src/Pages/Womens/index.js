import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Womens = () => {
  return (
    <div className="container py-5">
      <h2>Women's Fashion</h2>
      <p>Discover stylish outfits and accessories for women.</p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Clothing</h5>
              <p className="card-text">Trendy dresses, tops, and more.</p>
              <Link to="/womens/clothing">
                <Button variant="contained" color="primary">Shop Clothing</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Footwear</h5>
              <p className="card-text">Stylish shoes for every occasion.</p>
              <Link to="/womens/footwear">
                <Button variant="contained" color="primary">Shop Footwear</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Accessories</h5>
              <p className="card-text">Complete your look with accessories.</p>
              <Link to="/womens/accessories">
                <Button variant="contained" color="primary">Shop Accessories</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Womens;
