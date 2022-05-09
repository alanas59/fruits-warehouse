import React from "react";

const Service = (props) => {
  const { service } = props;
  const { name, img, description } = service;
  return (
    <div className="col-lg-3  text-center my-4">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Service;
