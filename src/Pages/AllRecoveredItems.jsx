import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { Helmet } from "react-helmet";
import { FaTh, FaTable } from "react-icons/fa";

const AllRecoveredItems = () => {
  const { user } = useContext(AuthContext);
  const [recoveredItems, setRecoveredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTableLayout, setIsTableLayout] = useState(false); // Track layout
  const AxiosSecure = UseAxiosSecure();

  // Fetch recovered items for the logged-in user
  useEffect(() => {
    const fetchRecoveredItems = async () => {
      try {
        const { data } = await AxiosSecure.get(
          `/recovered-items?email=${user?.email}`
        );
        setRecoveredItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recovered items:", error);
        setLoading(false);
      }
    };

    fetchRecoveredItems();
  }, [AxiosSecure, user?.email]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Helmet>
        <title>All Recovered || WhereIsIt</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-primary-darkest text-center mb-6">
        All Recovered Items
      </h2>

      {/* Layout Toggle Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsTableLayout(!isTableLayout)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-primary-dark transition"
        >
          {isTableLayout ? (
            <>
              <FaTh className="text-lg" />
            </>
          ) : (
            <>
              <FaTable className="text-lg" />
            </>
          )}
        </button>
      </div>

      {loading ? (
        <p className="text-center text-primary-dark">Loading...</p>
      ) : recoveredItems.length === 0 ? (
        <div className="text-center bg-primary-light text-primary-dark py-10 rounded-lg shadow-md">
          <p className="text-xl font-semibold">No Recovered Items Found</p>
          <p>Once you recover items, they will appear here.</p>
        </div>
      ) : isTableLayout ? (
        // Table Layout
        <div className="overflow-x-auto">
          <table className="min-w-full border border-primary-light bg-white rounded-lg shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Recovered Location</th>
                <th className="px-4 py-3 text-left">Recovered Date</th>
                <th className="px-4 py-3 text-left">Recovered By</th>
              </tr>
            </thead>
            <tbody>
              {recoveredItems.map((item, index) => (
                <tr
                  key={item._id}
                  className={`${
                    index % 2 === 0 ? "bg-primary-light" : "bg-white"
                  } hover:bg-primary-lightest transition`}
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{item.title}</td>
                  <td className="px-4 py-3">{item.location}</td>
                  <td className="px-4 py-3">
                    {new Date(item.recoverDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Card Layout
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recoveredItems.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-primary-light rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-primary-dark mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Recovered Location:</strong> {item.location}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Recovered Date:</strong>{" "}
                {new Date(item.recoverDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Recovered By:</strong> {item.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRecoveredItems;
