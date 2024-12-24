import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { IoMdCloseCircle } from "react-icons/io";
import DatePicker from "react-datepicker";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const PostDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isRecovered, setIsRecovered] = useState(null);
  const AxiosSecure = UseAxiosSecure();
  const [isPending, setisPending] = useState();
  const [date, setDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Simulate fetching data for a specific item by ID
  useEffect(() => {
    setisPending(true);
    const fetchData = async () => {
      const { data } = await AxiosSecure.get(`/PostData/${id}`);
      setItem(data);
      setIsRecovered(data?.isRecovered);
      setisPending(false);
    };
    fetchData();
  }, [AxiosSecure, id, isPending]);

  const handleModalSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const location = form.location.value;
    const recoverDate = date;
    const name = user.displayName;
    const email = user.email;
    const postID = id;
    const title = item.title;
    const recoverData = { location, recoverDate, name, email, postID, title };

    try {
      AxiosSecure.patch(`/itemStatus?id=${id}`)
        .then(() => {
          AxiosSecure.post("/addRecovered", { recoverData }).then(() => {
            Swal.fire({
              title: "Success",
              text: "Successfully saved ",
              icon: "success",
            });
            navigate("/allitems");
          });
        })
        .catch((error) =>
          Swal.fire({
            title: "something went wrong",
            text: error.message,
            icon: "error",
          })
        );
    } catch (error) {
      console.log(error);
    }
  };

  if (!item) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-bold text-primary-dark">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-primary-lightest min-h-screen py-10 px-6">
      <Helmet>
        <title>{item?.title} || WhereIsIt</title>
      </Helmet>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 border-2 border-primary-dark">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[300px] object-cover rounded-md"
        />
        <h1 className="text-xl md:text-3xl font-bold text-primary-dark my-4">
          {item.title}
        </h1>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Description:</strong> {item.description}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Location:</strong> {item.location}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Date:</strong> {new Date(item.postDate).toLocaleDateString()}
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
          className={`w-full  font-bold py-2 px-4 rounded-lg transition ${
            item.postType === "Lost"
              ? "bg-primary-dark text-white hover:bg-primary-darkest"
              : "bg-primary-dark text-white hover:bg-primary-darkest"
          }`}
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          {item.postType === "Lost" ? "Found This!" : "This is Mine!"}
        </button>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-10/12 md:max-w-6/12  h-auto relative">
          {/* Modal Body Start */}

          <form onSubmit={handleModalSubmit}>
            <div>
              {/* Location */}
              <div>
                <label className="block text-lg font-medium text-primary-dark mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  className="w-full border border-primary-dark rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter location where the item was lost or found"
                />
              </div>

              {/* Date */}
              <div className="w-full">
                <label className="mt-3 w-full block text-lg font-medium text-primary-dark mb-2">
                  Date Lost or Found
                </label>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  className="w-full  border border-primary-dark rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            {/* Contact Information */}
            <div className="">
              <label className=" mt-3 block text-lg font-medium text-primary-dark mb-2">
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
            {/* button */}
            <div>
              <button
                type="submit"
                disabled={isRecovered}
                className={
                  isRecovered
                    ? "bg-gray-400 w-full my-3   text-primary-dark py-2 rounded-lg text-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-primary"
                    : "w-full my-3 bg-primary hover:bg-primary-dark text-white py-2 rounded-lg text-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-primary"
                }
              >
                {isRecovered ? "Recovered" : "Save"}
              </button>
            </div>
          </form>

          {/* Modal Body End */}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="absolute top-3 right-3" title="Close">
                <IoMdCloseCircle className="text-primary-dark text-3xl" />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PostDetails;
