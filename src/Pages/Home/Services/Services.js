import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import Loading from "../../Shared/Loading/Loading";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://hidden-shore-43299.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  if (services.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-4 container">
      <h2 className="text-center">Our Services</h2>
      <div className="row">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
