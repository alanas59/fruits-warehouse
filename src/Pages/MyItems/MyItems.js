import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import 'react-toastify/dist/ReactToastify.css';

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    fetch("http://localhost:5000/fruits")
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.filter(
          (product) => product.email === user.email
        );
        setProducts(remaining);
        console.log(remaining);
      });
  }, [user]);

 

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you want to delete?');
    if(!confirm){
      return ;
    }
    const url = `http://localhost:5000/fruits/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = products.filter((product) => product._id != id);
          setProducts(remaining);
          toast('Successfully deleted');
        }
      });
  };
  return (
    <div className="container">
      <h2 className="text-center my-4">My Items</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <th>
                <img style={{ width: "100px" }} src={product.img} alt="" />
              </th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default MyItems;
