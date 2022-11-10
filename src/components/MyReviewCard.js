import React from "react";

const MyReviewCard = ({ review, handleDelete, handleEdit }) => {
  const { _id, serviceName, reviewer, email, message, image } = review;

  return (
    <>
      {review?._id ? (
        <div>
          <div className="relative flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 divide-gray-700 my-5">
            <div className="p-3 space-y-1 xl:ml-6">
              <h3 className="text-3xl font-semibold">{serviceName}</h3>
              <p className="text-sm dark:text-gray-400">{message}</p>
              <div className="mt-4">
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-outline btn-accent mx-4"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(_id)}
                  className="btn btn-outline btn-error"
                >
                  Edit review
                </button>
              </div>
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
      ) : (
        <div className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                <span className="sr-only">No review</span>No reviews were added
              </h2>
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, we couldn't find any review.
              </p>
              <p className="mt-4 mb-8 dark:text-gray-400">
                But don't worry, you can added review.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyReviewCard;
