import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Simulate fetching data from an API or backend
  useEffect(() => {
    const fetchItems = async () => {
      const data = [
        {
          id: 1,
          title: "Lost Wallet",
          description: "Black leather wallet with ID and cards.",
          location: "Downtown Park",
          date: "2024-12-20",
        },
        {
          id: 2,
          title: "Found Keys",
          description: "Set of house keys with a red keychain.",
          location: "City Library",
          date: "2024-12-18",
        },
        // Add more items here
      ];
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <div className="bg-primary-lightest min-h-screen py-10 px-6">
      <h1 className="text-3xl font-bold text-primary-dark text-center mb-6">
        Lost & Found Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg p-4 border-2 border-primary-dark"
          >
            <h2 className="text-xl font-semibold text-primary-dark mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600">
              <strong>Description:</strong> {item.description}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Location:</strong> {item.location}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Date:</strong> {item.date}
            </p>
            <button
              className="mt-4 w-full bg-primary-dark text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-darkest transition"
              onClick={() => navigate(`/details/${item.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
