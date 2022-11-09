import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="w-5/6 mx-auto">
      <div className="my-6">
        <p className="text-3xl font-semibold">Uber Barber</p>
        <p className="text-xl font-semibold">Men's Salon Home Service</p>
        <p>
          Hair cutting, Grooming & Pampering, specifically designed for the
          EXTRAORDINARY Men. Experience superior services with us The GentsCare
          is a barbershop, lounge, and spa offering quality grooming and
          pampering services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
