import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import LoadingPage from "./Loading";
import { Helmet } from "react-helmet";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const AxiosSecure = UseAxiosSecure();
  const [isPending, setPending] = useState();

  // Fetch items from the API or backend
  useEffect(() => {
    const fetchItems = async () => {
      setPending(true);
      try {
        const { data } = await AxiosSecure.get("/Post");
        setItems(data);
        setFilteredItems(data);
        setPending(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, [AxiosSecure]);

  // Handle search functionality
  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = items.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.location.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="bg-primary-lightest py-10 px-6">
      <Helmet>
        <title>All Post || WhereIsIt</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-primary-dark text-center mb-6">
        Lost & Found Items
      </h1>

      {/* Search Input */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-6 gap-1">
        <input
          type="text"
          placeholder="Search by title or location..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value), handleSearch();
          }}
          className="w-full md:w-2/6 border border-primary-light rounded-lg px-4 py-2 text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <button
          onClick={handleSearch}
          className="bg-primary-dark text-white font-medium px-6 py-2 rounded-lg hover:bg-primary-darkest transition"
        >
          Search
        </button>
      </div>

      {/* Items Display */}
      {isPending ? (
        <LoadingPage />
      ) : filteredItems.length === 0 ? (
        <div className="text-center bg-primary-light text-primary-dark py-10 rounded-lg shadow-md">
          <p className="text-xl font-semibold">No Items Found</p>
          <p>Add items to manage them here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item._id}
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
                <strong>Date:</strong>{" "}
                {new Date(item.postDate).toLocaleDateString()}
              </p>
              <button
                className="mt-4 w-full bg-primary-dark text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-darkest transition"
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
