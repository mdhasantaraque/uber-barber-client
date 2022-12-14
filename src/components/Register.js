import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authToken } from "../api/auth";
import useTitle from "../Hooks/useTitle";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  useTitle("Register");

  const from = location.state?.from?.pathname || "/";

  // New user create

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      alert("Should be at least 6 character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        authToken(user);
        form.reset();
      })
      .catch((error) => toast.error(error.message));
  };

  // New user create by google

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        authToken(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
                Register here !!!
              </h1>

              <form
                onSubmit={handleCreateUser}
                className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid mb-2"
              >
                <div className="form-control">
                  <label className="text-sm sr-only">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md text-black focus:ring focus:ring-violet-400 dark:border-gray-700 mb-2 p-2"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="text-sm sr-only">Email address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="w-full text-black rounded-md focus:ring dark:border-gray-700 p-2 mb-2"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="text-sm sr-only">Your password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 text-black rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                    required
                  />
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover dark:text-violet-400"
                    >
                      Already have an account?
                    </Link>
                  </label>
                </div>
                <button className="w-full py-2 font-semibold rounded btn btn-outline btn-accent">
                  Resister Now
                </button>
              </form>
              <button
                onClick={handleGoogle}
                className="w-full py-2 font-semibold rounded btn btn-outline btn-accent"
              >
                <FaGoogle></FaGoogle> With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
