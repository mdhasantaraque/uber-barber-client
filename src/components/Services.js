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
    <div>
      <div>
        <p className="text-3xl font-semibold">Uber Barber</p>
        <p className="text-xl font-semibold">Men's Salon Home Service</p>
        <p>
          Hair cutting, Grooming & Pampering, specifically designed for the
          EXTRAORDINARY Men. Experience superior services with us The GentsCare
          is a barbershop, lounge, and spa offering quality grooming and
          pampering services
        </p>
      </div>
      <div>
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
