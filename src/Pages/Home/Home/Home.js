import React from "react";
import "./Home.css";import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Story from "../Story/Story";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Story></Story>
      <Products></Products>
      <Services></Services>
    </div>
  );
};

export default Home;
