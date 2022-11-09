import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import ServiceReview from "./ServiceReview";

const ServiceDetails = () => {
  const { price, rating, image, style, details, service_cat, _id } =
    useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  fetch(`http://localhost:5000/reviews/${_id}`)
    .then((res) => res.json())
    .then((data) => setReviews(data));

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;
    const style = form.services.value;
    const image = user?.photoURL || "unregistered";

    const review = {
      serviceName: style,
      serviceId: _id,
      reviewer: name,
      email,
      message,
      image,
    };
    console.log(review);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledge) {
          toast.success("Your review successfully posted");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
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
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mx-auto">
                <div className="block gap-3 mx-auto group  dark:bg-gray-900">
                  <img
                    src={image}
                    alt=""
                    className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                  />
                  <div className="p-6 space-y-2 lg:col-span-5">
                    <p className="text-xl dark:text-violet-400">
                      {service_cat}
                    </p>
                    <h3 className="text-2xl font-semibold sm:text-4xl">
                      Style: {style}
                    </h3>
                    <p>Price:{price}</p>
                    <p>{details}</p>
                    <span className="text-xs dark:text-gray-400">
                      February 19, 2021
                    </span>
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
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto p-16">
          <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex space-x-4">
              <img
                alt=""
                src={user?.photoURL}
                className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
              />
            </div>
            <p className="font-semibold dark:text-violet-400 text-3xl">
              {style}
            </p>
            <p className="font-semibold dark:text-violet-400 text-xl">
              Review please
            </p>
            <div>
              <form
                onSubmit={handleReview}
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
                    defaultValue={user?.email}
                    className="w-full text-black rounded-md focus:ring dark:border-gray-700 p-2 mb-2"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="text-sm sr-only">Your services</label>
                  <input
                    name="services"
                    type="text"
                    placeholder="Style Name"
                    defaultValue={style}
                    className="w-full p-2 text-black rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                    required
                  />
                </div>
                <textarea
                  className="textarea textarea-accent text-black w-full h-40"
                  placeholder="your review"
                  name="message"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2 font-semibold rounded btn btn-outline btn-accent"
                >
                  Place review
                </button>
              </form>
            </div>
            <div className="flex flex-wrap justify-between"></div>
          </div>
          <div>
            {reviews.map((review) => (
              <ServiceReview key={review._id} review={review}></ServiceReview>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
