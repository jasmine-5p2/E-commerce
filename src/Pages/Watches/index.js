import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Analog Watches",
    description: "Classic designs for timeless style.",
    link: "/watches/analog",
    image: "/assets/analog.png"
  },
  {
    id: 2,
    title: "Digital Watches",
    description: "Modern technology for everyday use.",
    link: "/watches/digital",
    image: "/assets/digital.png"
  },
  {
    id: 3,
    title: "Smart Watches",
    description: "Advanced features for your lifestyle.",
    link: "/watches/smart",
    image: "/assets/smart.png"
  }
];

const CategoryCard = ({ category }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 text-center shadow-sm hover-shadow" style={{ transition: "transform 0.2s" }}>
      {category.image && (
        <img
          src={category.image}
          alt={category.title}
          className="card-img-top"
          style={{ height: "150px", objectFit: "contain" }}
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{category.title}</h5>
        <p className="card-text flex-grow-1">{category.description}</p>
        <Link to={category.link}>
          <Button variant="contained" color="primary">
            Shop {category.title.split(" ")[0]}
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

const Watches = () => {
  return (
    <div className="container py-5">
      <h2>Watches</h2>
      <p>Browse our selection of watches by category:</p>
      <div className="row">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default Watches;
