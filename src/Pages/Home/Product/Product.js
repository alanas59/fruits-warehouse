import React from "react";

const Product = props => {
 const {product} = props;
 const {name,img,description,price,supplierName,quantity} = product;
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
        <button className="btn btn-primary">GO</button>
      </div>
    </div>
  );
};

export default Product;
