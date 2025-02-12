import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import LoadingPage from "./Loading";
import { Helmet } from "react-helmet";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, setPending] = useState(false);
  const navigate = useNavigate();
  const AxiosSecure = UseAxiosSecure();

  const fetchItems = useCallback(async () => {
    setPending(true);
    try {
      const { data } = await AxiosSecure.get("/Post");
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setPending(false);
    }
  }, [AxiosSecure]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const filteredItems = useMemo(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.location.toLowerCase().includes(lowerCaseQuery)
    );
  }, [searchQuery, items]);

  return (
    <div className="bg-gradient-to-b from-primary-light to-background-light dark:from-background-dark dark:to-primary-darkest py-10 px-6">
      <Helmet>
        <title>All Posts | WhereIsIt</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-primary-dark dark:text-white text-center mb-6">
        Lost & Found Items
      </h1>

      {/* Search Input */}
      <div className="flex flex-row items-center justify-center mb-6 gap-2">
        <input
          type="text"
          placeholder="Search by title or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-2/6 border border-primary-light dark:border-gray-600 bg-white dark:bg-gray-800 text-primary-dark dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <button
          onClick={() => setSearchQuery(searchQuery.trim())}
          className="bg-primary-dark text-white font-medium px-6 py-2 rounded-lg hover:bg-primary-darkest dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-2 focus:ring-primary transition"
        >
          Search
        </button>
      </div>

      {/* Items Display */}
      {isPending ? (
        <LoadingPage />
      ) : filteredItems.length === 0 ? (
        <div className="text-center bg-primary-light dark:bg-gray-800 text-primary-dark dark:text-white py-10 rounded-lg shadow-md">
          <p className="text-xl font-semibold">No Items Found</p>
          <p className="text-gray-600 dark:text-gray-400">
            Try searching with different keywords.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item._id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-primary-light dark:border-gray-700 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-primary-dark dark:text-white mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Description:</strong> {item.description}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Location:</strong> {item.location}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Date:</strong>{" "}
                {new Date(item.postDate).toLocaleDateString()}
              </p>
              <button
                className="mt-4 w-full bg-primary-dark dark:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-darkest dark:hover:bg-gray-600 transition"
                onClick={() => navigate(`/details/${item._id}`)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllItems;
