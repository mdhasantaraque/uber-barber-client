import React from "react";

const ServiceReview = ({ review }) => {
  const { reviewer, serviceName, message, image, email } = review;

  return (
    <div>
      <div className="relative flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 divide-gray-700 mb-5">
        <div className="p-3 space-y-1 xl:ml-6">
          <h3 className="text-3xl font-semibold">{serviceName}</h3>
          <p className="text-sm dark:text-gray-400">{message}</p>
        </div>
        <div className="items-center p-3 space-x-3">
          <img
            alt=""
            src={image}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="space-y-1">
            <span className="text-lg">{reviewer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceReview;
