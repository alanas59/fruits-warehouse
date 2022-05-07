import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fruits")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <div className="row g-5 m-5">
        <h2 className="text-center">My Fruits Inventory</h2>
        {products.map((product) => (
          <Product 
          key={product._id}
          product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
