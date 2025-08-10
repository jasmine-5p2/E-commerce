import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Watches = () => {
  return (
    <div className="container py-5">
      <h2>Watches</h2>
      <p>Browse our selection of watches by category:</p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Analog Watches</h5>
              <p className="card-text">Classic designs for timeless style.</p>
              <Link to="/watches/analog">
                <Button variant="contained" color="primary">Shop Analog</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Digital Watches</h5>
              <p className="card-text">Modern technology for everyday use.</p>
              <Link to="/watches/digital">
                <Button variant="contained" color="primary">Shop Digital</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Smart Watches</h5>
              <p className="card-text">Advanced features for your lifestyle.</p>
              <Link to="/watches/smart">
                <Button variant="contained" color="primary">Shop Smart</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
