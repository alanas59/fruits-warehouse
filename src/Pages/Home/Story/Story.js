import React from "react";
import "./Story.css";

const Story = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-6">
          <img
            className="story-img"
            src="https://i.ibb.co/wpNK5P0/orange.png"
            alt=""
          />
        </div>
        <div className="col-lg-6" style={{ marginTop: "150px" }}>
          <h6>OUR STORY</h6>
          <h2 style={{ color: "#263B5E" }}>
            We are best organic food provider
          </h2>
          <p>
            Millions of tons of vegetables and fruits are harvested and then
            distributed throughout Europe every year. However, fruits and
            vegetables can be regarded as highly perishable foods and are
            especially susceptible to changing climatic conditions (temperature,
            humidity) after harvest. The long distribution pathways in
            combination with insufficient technologies for appropriate transport
            and storage lead to a high amount of food wasted as well as to
            products with inferior quality arriving at the consumer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
