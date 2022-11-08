import React from "react";
import { img_1 } from "../assets/barber.jpg";

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-black to-green-900 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `${img_1}`,
          }}
        >
          <div className="hero-overlay bg-opacity-90"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none mb-12 sm:text-6xl">
            Ac mattis
            <span className="dark:text-violet-400">senectus</span>erat pharetra
          </h1>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button className="btn btn-outline btn-accent">Show All</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
