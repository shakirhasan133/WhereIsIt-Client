/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAllPost = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/Post`);
      setItems(data);
    };
    fetchAllPost();
  }, []);

  console.log(items);

  return (
    <section className="py-10 bg-primary-lightest text-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 font-primary">
            Latest Finds & Lost Items
          </h2>
          <p className="text-lg opacity-80 font-primary">
            Browse the most recent lost and found items. Let's reunite owners
            with their belongings!
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 6).map((item) => (
            <div
              key={item._id}
              className="bg-primary-light shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 font-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-medium opacity-90 mb-4">
                  {item.description.length > 60
                    ? `${item.description.slice(0, 60)}...`
                    : item.description}
                </p>
                <p className="text-sm text-primary-dark mb-4">
                  <strong>Location:</strong> {item.location}
                </p>
                <p className="text-sm text-primary-dark mb-4">
                  <strong>Date:</strong>{" "}
                  {new Date(item.postDate).toLocaleDateString()}
                </p>
                <Link
                  to={`/details/${item._id}`}
                  className="inline-block  py-2 text-sm bg-primary-teal text-white font-medium rounded-md hover:bg-primary-medium transition font-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-8">
          <Link
            to="/allitems"
            className="px-6 py-2 bg-primary-dark text-primary-light text-sm font-medium rounded-md hover:bg-primary-teal hover:text-black transition font-primary"
          >
            See All Items
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestItems;
