import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../hooks/UseAxiosSecure";

const PostDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const AxiosSecure = UseAxiosSecure();
  const [isPending, setisPending] = useState();

  // Simulate fetching data for a specific item by ID
  useEffect(() => {
    setisPending(true);
    const fetchData = async () => {
      const { data } = await AxiosSecure.get(`/PostData/${id}`);
      setItem(data);
      setisPending(false);
    };
    fetchData();
  }, [AxiosSecure, id, isPending]);

  if (!item) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-bold text-primary-dark">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-primary-lightest min-h-screen py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 border-2 border-primary-dark">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[300px] object-cover rounded-md"
        />
        <h1 className="text-xl md:text-3xl font-bold text-primary-dark my-4">
          {item.title}
        </h1>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Description:</strong> {item.description}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Location:</strong> {item.location}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Date:</strong> {new Date(item.postDate).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Post Type:</strong> {item.postType}
        </p>

        {item.ownerContact && (
          <p className="text-sm text-gray-600 mb-4">
            <strong>Contact:</strong> {item.ownerContact}
          </p>
        )}

        {/* Conditional Button */}
        <button
          className={`w-full  font-bold py-2 px-4 rounded-lg transition ${
            item.postType === "Lost"
              ? "bg-primary-dark text-white hover:bg-primary-darkest"
              : "bg-primary-dark text-white hover:bg-primary-darkest"
          }`}
          onClick={() =>
            alert(
              item.postType === "Lost"
                ? "You found this item! Contact the owner."
                : "You claim this item as yours!"
            )
          }
        >
          {item.postType === "Lost" ? "Found This!" : "This is Mine!"}
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
