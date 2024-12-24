import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { AuthContext } from "../Provider/AuthContext";

const ShortReview = () => {
  const [review, setReview] = useState("");
  const maxWords = 25;
  const AxiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const wordCount = review.trim().split(/\s+/).length;

    if (wordCount > maxWords) {
      toast.error(`Your review exceeds the ${maxWords}-word limit.`);
      return;
    }

    const date = new Date();

    const reviewData = {
      review,
      reviewDate: date,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      email: user?.email,
    };

    console.log(reviewData);

    try {
      AxiosSecure.post("/addReview", { reviewData })
        .then(({ data }) => {
          console.log(data);
          toast.success("Review submitted successfully!");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }

    setReview("");
  };

  return (
    <div className="bg-gradient-to-b from-primary-light to-background-lights py-10">
      <div className="bg-white shadow-lg rounded-lg max-w-xl mx-auto p-6 ">
        <Toaster />
        <h2 className="text-2xl font-bold text-primary-darkest mb-4 text-center">
          Write a Short Review
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Share your thoughts in up to {maxWords} words.
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here..."
            className="w-full p-3 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
            rows="4"
          ></textarea>
          <p className="text-right text-gray-500 text-sm mt-2">
            {review.trim().split(/\s+/).length}/{maxWords} words
          </p>
          <button
            type="submit"
            className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-all"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShortReview;
