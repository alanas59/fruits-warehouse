import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/fruits")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) {
    return <Loading></Loading>;
  }

  const handleManageProducts = () => {
    navigate("/manage-page");
  };
  return (
    <div className="container">
      <div className="row g-5 m-5">
        <h2 className="text-center">My Fruits Inventory</h2>
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-info mb-4" onClick={handleManageProducts}>
          Mange products
        </button>
      </div>
    </div>
  );
};

export default Products;
