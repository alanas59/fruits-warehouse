import React from "react";
import { useNavigate } from "react-router-dom";

const Product = props => {
 const {product} = props;
 const navigate = useNavigate();
 const handleStockUpdate = id =>{
    const url = `/inventory/${id}`;
    navigate(url);
 }
 const {name,img,description,price,supplierName,quantity,_id} = product;
  return (
    <div className="col-lg-4">
      <div className="card" style={{height:"570px"}}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p className="card-text">{description}</p>
          <p>Price : ${price}</p>
          <p>Quantity : {quantity}</p>
          <p>Supplier : {supplierName}</p>
        </div>
        <button onClick={()=>handleStockUpdate(_id)} className="btn btn-primary">stock update</button>
      </div>
    </div>
  );
};

export default Product;
