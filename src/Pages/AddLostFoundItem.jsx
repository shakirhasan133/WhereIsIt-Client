import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
// import { Helmet } from "react-helmet";
import LoadingPage from "./Loading";
import { Helmet } from "react-helmet";

const AddLostFoundItem = () => {
  const { user, Loading } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  const [imageURL, setimgURL] = useState(null);
  const AxiosSecure = UseAxiosSecure();
  const [isPending, setPending] = useState();

  // Handle Image Upload
  const handleImageUpload = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    const formData = new FormData(); // Initialize FormData without arguments
    formData.append("image", file);

    fetch(
      "https://api.imgbb.com/1/upload?key=4aa0d4e4eb28ac1b869ebdc95c1b098f",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => setimgURL(data.data.url))
      .catch((error) => console.log(error));
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    const form = e.target;

    const postType = form.postType.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const postDate = date;

    const postData = {
      postType,
      title,
      description,
      category,
      location,
      postDate,
      image: imageURL,
      isRecovered: false,
      email: user.email,
      userName: user.displayName,
    };

    // console.log(postData);
    try {
      AxiosSecure.post("/addItem", { postData })
        .then(({ data }) => {
          console.log({ data });
          setPending(false);
          Swal.fire({
            title: "Success",
            text: "Post Added Successfully",
            icon: "success",
          });
          form.reset();
        })
        .catch((error) => {
          Swal.fire({
            title: "Something Went Wrong",
            text: error.message,
            icon: "error",
          });
          setPending(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  if (Loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 bg-primary-light/10 rounded-lg shadow-md">
      <Helmet>
        <title>Add Post || WhereIsIt</title>
      </Helmet>
      <h2 className="text-3xl font-semibold text-center text-primary-dark mb-6">
        Add Lost & Found Item
      </h2>
      <form
        onSubmit={handlePostSubmit}
        className="space-y-6 bg-white p-8 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Post Type */}
          <div>
            <label className="block text-lg font-medium text-primary-dark mb-2">
              Post Type
            </label>
            <select
              className="w-full border border-primary-dark rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              name="postType"
              required
            >
              <option selected disabled>
                Select Post Type
              </option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block text-lg font-medium text-primary-dark mb-2">
              Thumbnail (Image Upload)
            </label>
            <input
              required
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border border-primary-dark rounded-lg px-4 py-[6px] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-lg font-medium text-primary-dark mb-2">
              Title
            </label>
            <input
              required
              type="text"
              name="title"
              className="w-full border border-primary-dark rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter a title"
            />
          </div>

          {/* Description */}
          <div className="sm:col-span-2 lg:col-span-3">
            <label className="block text-lg font-medium text-primary-dark mb-2">
              Description
            </label>
            <textarea
              required
              className="w-full border border-primary-dark rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              //   rows="4"
              name="description"
              placeholder="Enter a description"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block text-lg font-medium text-primary-dark mb-2">
              Category
            </label>
            <select
              className="w-full border border-primary-dark rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              name="category"
              required
            >
              <option selected disabled>
                Select Category
              </option>
              <option value="pets">Pets</option>
              <option value="documents">Documents</option>
              <option value="gadgets">Gadgets</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-lg font-medium text-primary-dark mb-2">
              Location
            </label>
            <input
              required
              type="text"
              name="location"
              className="w-full border border-primary-dark rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter location where the item was lost or found"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-lg font-medium text-primary-dark mb-2">
              Date Lost or Found
            </label>
            <DatePicker
              required
              selected={date}
              onChange={(date) => setDate(date)}
              className="w-full border border-primary-dark rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Contact Information */}
          <div className="sm:col-span-2 lg:col-span-3">
            <label className="block text-lg font-medium text-primary-dark mb-2">
              Contact Information
            </label>
            <div className="flex items-center justify-between gap-3 flex-col md:flex-row">
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className=" w-full border py-2 border-primary-dark rounded-lg px-4  bg-primary-light/30"
              />
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className=" w-full border py-2 border-primary-dark rounded-lg px-4  bg-primary-light/30 "
              />
            </div>
          </div>
        </div>

        {/* Add Post Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg text-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {isPending ? "Saving..." : "Add Post"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLostFoundItem;
