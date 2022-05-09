import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import "react-toastify/dist/ReactToastify.css";

const AddItem = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = parseFloat(event.target.price.value);
    const description = event.target.description.value;
    const img = event.target.img.value;
    const quantity = parseInt(event.target.quantity.value);
    const supplierName = event.target.supplier.value;
    const email = user.email;

    console.log({
      name,
      price,
      description,
      img,
      quantity,
      supplierName,
      email,
    });

    const fruit = {
      name,
      price,
      description,
      img,
      quantity,
      supplierName,
      email,
    };

    fetch("https://hidden-shore-43299.herokuapp.com/fruits", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fruit),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast("Product Inserted");
      });
    event.target.reset();
  };
  return (
    <div className="container col-lg-6">
      <ToastContainer />
      <h2 className="text-center my-4">Add a new product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="text" className="form-control" name="price" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image Url</label>
          <input type="text" className="form-control" name="img" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Supplier</label>
          <input
            type="text"
            className="form-control"
            name="supplier"
            required
          />
        </div>
        <button className="btn btn-info mb-4">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
