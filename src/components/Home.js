import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import HomeCard from "./HomeCard";

const Home = () => {
  const [services, setServices] = useState([]);
  useTitle("Home");

  // API call for Home service card

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const limitServices = services.slice(0, 3);

  return (
    <section className="bg-gradient-to-r from-black to-green-900 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between pb-4">
        <div
          className="hero min-h-screen w-3/4"
          style={{
            backgroundImage: `url("https://i.ibb.co/9btzhBd/barber.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-fuchsia-100 text-5xl font-bold">
                Uber barber
              </h1>
              <p className="text-3xl font-bold text-red-900">Hurray!!!</p>
              <p className="mb-2">Men Home Service Saloon</p>
              <p className="mb-2">So fresh and so clean</p>
              <p className="mb-5">
                Not ready to go back to your CTG salon? <br /> Try these at-home
                spa, haircuts and nail services
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-4">
            {limitServices.map((service) => (
              <HomeCard key={service._id} service={service}></HomeCard>
            ))}
          </div>
          <Link to="/services">
            <button className="btn btn-active btn-accent">See All</button>
          </Link>
        </div>
      </div>

      <div>
        <div className="p-6 py-12 dark:bg-violet-200 dark:text-gray-900">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                Up to
                <br className="sm:hidden" />
                30% Off
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>For Discount ! Use code:</span>
                <span className="font-bold text-lg">Uber Barber</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <img
          src="https://i.ibb.co/YQKXF0P/men-spa-packages.jpg"
          alt=""
          srcset=""
        />
      </div>
    </section>
  );
};

export default Home;
