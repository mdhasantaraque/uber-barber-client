import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ service }) => {
  const { price, rating, image, style, details, service_cat, _id } = service;
  return (
    <div>
      <div>
        <div className="max-w-xs shadow-md mb-4 bg-gradient-to-r from-green-900 to-green-800 dark:text-gray-50">
          <img
            src={image}
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            aria-label="Te nulla oportere reprimique his dolorum"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
              {service_cat}
            </span>
          </div>
          <div className="text-start p-4">
            <h2 className="text-2xl font-semibold tracking-wide">{style}</h2>
            <p className="dark:text-gray-100">Price: {price}</p>
            <p className="dark:text-gray-100 mb-3">
              {details.slice(0, 30) + " ..."}
            </p>
            <div>
              <Link to={`/serviceDetails/${_id}`}>
                <button className="btn btn-outline btn-accent">Details</button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center pt-1 space-x-2 text-xs dark:text-gray-400">
              <span>Rating: {rating}</span>
              <span>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
