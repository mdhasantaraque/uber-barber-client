import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useTitle from "../Hooks/useTitle";
import { AuthContext } from "./AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("My review");
  console.log(reviews);
  // My review API call

  useEffect(() => {
    fetch(
      `https://uber-barber-server.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("uber-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, [user?.email, logOut]);

  // review edit
  const handleEdit = (id) => {
    const proceed = window.confirm("Would you want to edit?");
    console.log(proceed);
  };

  // review delete call

  const handleDelete = (id) => {
    const proceed = window.confirm("Would you want to delete?");
    if (proceed) {
      fetch(`https://uber-barber-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.error("Successfully deleted");
          }
          const remaining = reviews.filter((review) => review._id !== id);
          setReviews(remaining);
        });
    }
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
            <div>
              {reviews.length <= 0 ? (
                <div className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                  <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                      <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">No review</span>No reviews
                        were added
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
              ) : (
                <div>
                  {reviews.map((review) => (
                    <MyReviewCard
                      key={review._id}
                      review={review}
                      const
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    ></MyReviewCard>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyReview;
