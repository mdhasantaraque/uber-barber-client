import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // My review API call
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [user?.email]);

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
                <MyReviewCard key={review._id} review={review}></MyReviewCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyReview;
