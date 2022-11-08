import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-gradient-to-r from-black to-green-900 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://i.ibb.co/9btzhBd/barber.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-90"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
              <h1 className="text-5xl font-extrabold dark:text-gray-50 mb-16">
                Login here !!!
              </h1>

              <form className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                <div>
                  <label for="name" className="text-sm sr-only">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="w-full text-black rounded-md focus:ring dark:border-gray-700 p-2 mb-2"
                    required
                  />
                </div>
                <div>
                  <label for="name" className="text-sm sr-only">
                    Your password
                  </label>
                  <input
                    name="Password"
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 text-black rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                    required
                  />
                  <label className="label">
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover dark:text-violet-400"
                    >
                      If not registered?
                    </Link>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 font-semibold rounded btn btn-outline btn-accent"
                >
                  Resister Now
                </button>
                <button
                  type="submit"
                  className="w-full py-2 font-semibold rounded btn btn-outline btn-accent"
                >
                  <FaGoogle></FaGoogle> With Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
