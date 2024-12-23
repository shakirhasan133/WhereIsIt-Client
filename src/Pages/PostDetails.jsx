import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PostDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  // Simulate fetching data for a specific item by ID
  useEffect(() => {
    const fetchItem = async () => {
      const mockData = [
        {
          id: 1,
          title: "Lost Wallet",
          description: "Black leather wallet with ID and cards.",
          location: "Downtown Park",
          date: "2024-12-20",
          postType: "Lost",
          ownerContact: "walletowner@example.com",
        },
        {
          id: 2,
          title: "Found Keys",
          description: "Set of house keys with a red keychain.",
          location: "City Library",
          date: "2024-12-18",
          postType: "Found",
          ownerContact: null,
        },
      ];

      const foundItem = mockData.find((data) => data.id === parseInt(id));
      setItem(foundItem);
    };

    fetchItem();
  }, [id]);

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
        <h1 className="text-3xl font-bold text-primary-dark mb-4">
          {item.title}
        </h1>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Description:</strong> {item.description}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Location:</strong> {item.location}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Date:</strong> {item.date}
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
          className={`w-full text-white font-bold py-2 px-4 rounded-lg transition ${
            item.postType === "Lost"
              ? "bg-primary-dark hover:bg-primary-darkest"
              : "bg-secondary hover:bg-secondary-dark"
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
