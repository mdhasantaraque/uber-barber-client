import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <header className="p-4 bg-gradient-to-r from-green-500 to-gray-800 dark:text-gray-100 drop-shadow-2xl ">
      <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/services"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Service
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/order"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Order
            </Link>
          </li>
        </ul>
        <li>
          {user?.photoURL ? (
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
          ) : (
            <FaUserCircle></FaUserCircle>
          )}
        </li>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/blog"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Blog
            </Link>
          </li>
          {user?.uid ? (
            <li className="flex">
              <button
                onClick={handleToLogOut}
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                LogOut
              </button>
            </li>
          ) : (
            <>
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  to="/register"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Register
                </Link>
              </li>
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  to="/login"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 dark:text-gray-100" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <div className="flex items-center justify-between w-64">
                        <div className="w-16">
                          <img src="" alt="" />
                        </div>
                        <p className="dark:text-primary text-2xl font-bold">
                          Uber Barber
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        aria-label="home"
                        title="Home"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        aria-label="register"
                        title="Register"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        aria-label="login"
                        title="Login"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        <p>Login</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        aria-label="services"
                        title="Services"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/order"
                        aria-label="order"
                        title="Order"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Order
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        aria-label="Blog"
                        title="Blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="flex">
                      <button
                        onClick={handleToLogOut}
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        LogOut
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
