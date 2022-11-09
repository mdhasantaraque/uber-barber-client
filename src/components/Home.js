import React from "react";

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-black to-green-900 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div
          className="hero min-h-screen"
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
        <div></div>
      </div>
    </section>
  );
};

export default Home;
