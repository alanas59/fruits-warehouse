import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/fruits/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleDelivered = () => {
    const quantity = product.quantity - 1;
    const updatedQuantity = { quantity };
    fetch(`http://localhost:5000/fruits/${id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Delivered");
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const stock = event.target.quantity.value;
    if (stock <= 0) {
      alert("Give a positive number");
      return;
    }
    const quantity = product.quantity + parseInt(stock);
    fetch(`http://localhost:5000/fruits/${id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Restocked");
      });
  };
  return (
    <div>
      <h2 className="text-center m-3">Fruit Information</h2>
      <div class="card mx-auto mb-2" style={{ width: "500px" }}>
        <img src={product.img} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h2 class="card-title">{product.name}</h2>
          <p>Id:{product._id}</p>
          <p class="card-text">{product.description}</p>
          <h4>Price : ${product.price}</h4>
          <p>Quantity : {product.quantity}</p>
          <p>Supplier:{product.supplierName}</p>
          <p>Sold:{product.sold}</p>
          <button onClick={handleDelivered} className="btn btn-primary">
            Delivered
          </button>
        </div>
        {/* form section */}
        <div className="text-center my-2">
          <form onSubmit={handleSubmit}>
            <input type="number" name="quantity" />
            <br />
            <input
              type="submit"
              className="btn btn-warning mt-2"
              value="Restock"
              id=""
            />
          </form>
          <div className="my-2">
             <Link to="/manage-page">Mange products</Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Inventory;
