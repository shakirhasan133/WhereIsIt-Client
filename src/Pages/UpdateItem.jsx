import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContext";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

const UpdateItem = () => {
  const { id } = useParams(); // Get the item ID from the route
  const { user } = useContext(AuthContext);
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const AxiosSecure = UseAxiosSecure();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  // Fetch item data by ID
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await AxiosSecure.get(`/PostData/${id}`);
        setItemData(data);
        setDate(data.postDate);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching item:", error);
        setLoading(false);
      }
    };

    fetchItem();
  }, [AxiosSecure, id]);

  // Handle form submission for updates
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedItem = {
      title: e.target.title.value,
      description: e.target.description.value,
      category: e.target.category.value,
      location: e.target.location.value,
      postDate: date,
      email: user?.email,
    };

    try {
      await AxiosSecure.put(`/updateItem/${id}`, updatedItem)
        .then(() => {
          Swal.fire("Success", "Item updated successfully!", "success");
          navigate("/myItems");
        })
        .catch((error) => {
          Swal.fire("Success", error.message, "success");
        });
    } catch (error) {
      console.error("Error updating item:", error);
      Swal.fire("Error", "Failed to update the item.", "error");
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary-light to-background-light">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Helmet>
          <title>Update Post|| WhereIsIt</title>
        </Helmet>
        <h2 className="text-3xl font-bold text-primary-darkest text-center mb-6">
          Update Item
        </h2>

        {loading ? (
          <p className="text-center text-primary-dark">Loading...</p>
        ) : (
          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded-lg shadow-lg space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="block text-primary-darkest font-semibold">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={itemData?.title}
                  required
                  className="w-full border border-primary-light rounded-lg px-4 py-2 mt-1"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-primary-darkest font-semibold">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={itemData?.category}
                  required
                  className="w-full border border-primary-light rounded-lg px-4 py-2 mt-1"
                >
                  <option value="electronics">Electronics</option>
                  <option value="jewelry">Jewelry</option>
                  <option value="documents">Documents</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-primary-darkest font-semibold">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={itemData?.description}
                required
                rows={4}
                className="w-full border border-primary-light rounded-lg px-4 py-2 mt-1"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location */}
              <div>
                <label className="block text-primary-darkest font-semibold">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  defaultValue={itemData?.location}
                  required
                  className="w-full border border-primary-light rounded-lg px-4 py-2 mt-1"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-primary-darkest font-semibold">
                  Date
                </label>
                <DatePicker
                  required
                  selected={date}
                  onChange={(date) => setDate(date)}
                  className="w-full border border-primary-dark rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* User Email */}
              <div>
                <label className="block text-primary-darkest font-semibold">
                  User Email
                </label>
                <input
                  type="email"
                  value={user?.email}
                  readOnly
                  className="w-full bg-gray-100 border border-primary-light rounded-lg px-4 py-2 mt-1"
                />
              </div>

              {/* User Name */}
              <div>
                <label className="block text-primary-darkest font-semibold">
                  User Name
                </label>
                <input
                  type="text"
                  value={user?.displayName}
                  readOnly
                  className="w-full bg-gray-100 border border-primary-light rounded-lg px-4 py-2 mt-1"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center  justify-center gap-3">
              <button
                type="submit"
                className="bg-primary-dark text-white px-6 py-2 rounded-lg shadow hover:bg-primary-darkest transition"
              >
                Update
              </button>
              <button
                onClick={() => {
                  navigate("/myItems");
                }}
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary-dark transition"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateItem;
