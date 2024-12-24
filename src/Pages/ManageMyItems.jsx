/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import LoadingPage from "./Loading";
import { useNavigate } from "react-router-dom";

const ManageMyItems = () => {
  const { user } = useContext(AuthContext);
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const AxiosSecure = UseAxiosSecure();
  const navigate = useNavigate();

  // Fetch user's items
  useEffect(() => {
    if (user && user.email) {
      const fetchMyItems = async () => {
        try {
          AxiosSecure.get(`/my-items?email=${user.email}`)
            .then(({ data }) => {
              setMyItems(data);
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.error("Error fetching user items:", error);
          setLoading(false);
        }
      };
      fetchMyItems();
    }
  }, [AxiosSecure, user.email]);

  // Delete item handler
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/api/items/${id}`);
          setMyItems((prev) => prev.filter((item) => item._id !== id));
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting item:", error);
        }
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/updateItems/${id}`);
  };

  if (!user) {
    return <LoadingPage></LoadingPage>;
  }

  if (!myItems) {
    return (
      <div className="text-center bg-primary-light text-primary-dark py-10 rounded-lg shadow-md">
        <p className="text-xl font-semibold">No Items Found</p>
        <p>Add items to manage them here.</p>
      </div>
    );
  }
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-primary-darkest text-center mb-6">
        Manage My Items
      </h2>

      {loading ? (
        <LoadingPage></LoadingPage>
      ) : myItems.length === 0 ? (
        <div className="text-center bg-primary-light text-primary-dark py-10 rounded-lg shadow-md">
          <p className="text-xl font-semibold">No Items Found</p>
          <p>Add items to manage them here.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-primary-light bg-white rounded-lg shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myItems &&
                myItems.map((item, index) => (
                  <tr
                    key={item._id}
                    className={`${
                      index % 2 === 0 ? "bg-primary-light" : "bg-white"
                    } hover:bg-primary-lightest transition`}
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{item.title}</td>
                    <td className="px-4 py-3 capitalize">{item.category}</td>
                    <td className="px-4 py-3 capitalize">
                      {item.isRecovered ? "Recovered" : "Not Recovered"}
                    </td>
                    <td className="px-4 py-3 flex justify-center space-x-4">
                      <button
                        onClick={() => handleUpdate(item._id)}
                        className="bg-primary-dark text-white px-4 py-2 rounded-lg shadow hover:bg-primary-darkest transition"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageMyItems;
