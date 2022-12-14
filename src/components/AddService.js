import React from "react";
import { toast } from "react-toastify";
import useTitle from "../Hooks/useTitle";

const AddService = () => {
  useTitle("Addservice");

  // New service add field

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const style = form.name.value;
    const price = form.price.value;
    const image = form.img.value;
    const details = form.message.value;
    const service = form.service.value;
    const rating = form.rating.value;

    const services = {
      style,
      price,
      image,
      details,
      service_cat: service,
      rating,
    };
    // console.log(services);

    fetch("https://uber-barber-server.vercel.app/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledge) {
          toast.success("Services successfully added");
          form.reset();
        }
      })
      .catch((err) => toast.error(err));
  };
  return (
    <div className="p-4 bg-gradient-to-r from-green-500 to-gray-800 dark:text-gray-100 ">
      <div className="grid p-4 mx-auto items-end justify-center">
        <div className=" max-w-lg p-6 my-8 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
          <p className="font-semibold dark:text-violet-400 text-3xl">
            Add Service
          </p>
          <p className="font-semibold dark:text-violet-400 text-xl">
            Admin only
          </p>
          <div>
            <form
              onSubmit={handleAddService}
              className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid mb-2"
            >
              <div className="form-control">
                <label className="text-sm sr-only">Service name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Service name"
                  className="w-full rounded-md text-black focus:ring focus:ring-violet-400 dark:border-gray-700 mb-2 p-2"
                  required
                />
              </div>
              <div className="form-control">
                <label className="text-sm sr-only">Price</label>
                <input
                  name="price"
                  type="text"
                  placeholder="Price"
                  className="w-full text-black rounded-md focus:ring dark:border-gray-700 p-2 mb-2"
                  required
                />
              </div>
              <div className="form-control">
                <label className="text-sm sr-only">Image</label>
                <input
                  name="img"
                  type="img"
                  placeholder="Image URL"
                  className="w-full text-black rounded-md focus:ring dark:border-gray-700 p-2 mb-2"
                  required
                />
              </div>
              <div className="form-control">
                <label className="text-sm sr-only">Service type</label>
                <input
                  name="service"
                  type="text"
                  placeholder="Service Type"
                  defaultValue="Home Service"
                  className="w-full p-2 text-black rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                  required
                />
              </div>
              <div className="form-control">
                <label className="text-sm sr-only">Rating</label>
                <input
                  name="rating"
                  type="text"
                  placeholder="rating"
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
                Add Service
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
