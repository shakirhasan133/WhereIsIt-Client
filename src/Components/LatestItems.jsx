/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
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

  return (
    <section className="py-10 bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light transition">
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
              className="bg-primary-light dark:bg-primary-dark dark:text-primary-light shadow-md rounded-lg overflow-hidden transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 font-primary">
                  {item.title}
                </h3>
                <p className="text-md text-primary-medium dark:text-primary-light opacity-90 mb-4">
                  {item.description.length > 60
                    ? `${item.description.slice(0, 60)}...`
                    : item.description}
                </p>
                <p className="text-md text-primary-dark dark:text-primary-light mb-4">
                  <strong>Location:</strong> {item.location}
                </p>
                <p className="text-md text-primary-dark dark:text-primary-light mb-4">
                  <strong>Date:</strong>{" "}
                  {new Date(item.postDate).toLocaleDateString()}
                </p>
                <div className="text-center py-2">
                  <Link
                    to={`/details/${item._id}`}
                    className="bg-primary-dark dark:bg-primary-light flex items-center justify-center gap-1 text-white dark:text-primary-dark font-bold py-2 px-4 rounded-lg hover:bg-primary-darkest dark:hover:bg-primary-lightest transition"
                  >
                    <span>View Details </span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-8">
          <Link
            to="/allitems"
            className="px-6 py-2 bg-primary-dark dark:bg-primary-light text-primary-light dark:text-primary-dark text-sm font-medium rounded-md hover:bg-primary-teal hover:text-black dark:hover:bg-primary-lightest dark:hover:text-black transition font-primary"
          >
            See All Items
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestItems;
