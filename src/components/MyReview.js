import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useTitle from "../Hooks/useTitle";
import { AuthContext } from "./AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("My review");

  // My review API call

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, [user?.email]);

  // review edit
  const handleEdit = (id) => {
    const proceed = window.confirm("Would you want to edit?");
    console.log(proceed);
  };

  // review delete call

  const handleDelete = (id) => {
    const proceed = window.confirm("Would you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyReview;
