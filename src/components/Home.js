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
              <p className="mb-5">So fresh and so clean</p>
              <p className="mb-5">
                Always fulfilling your expectations <br /> Get inspired for a
                new look this season. <br />
                See our gallery and find a cut that suits you this fall.
              </p>
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
