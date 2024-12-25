/* eslint-disable react/prop-types */
import { FaQuoteLeft } from "react-icons/fa";

const StoryCard = ({ story }) => (
  <div
    key={story.id}
    className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-xl hover:-translate-y-1 duration-300 mx-3"
  >
    <div className="p-6 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
        <img
          src={story.userPhoto}
          alt={`${story.userName}'s story`}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-primary-dark mb-2">
        {story.userName}
      </h3>
      <p className="text-primary-medium text-sm italic mb-4">
        <FaQuoteLeft className="inline mr-2" />
        {story.review}
      </p>
      <span className="text-sm text-primary-dark">{story.date}</span>
    </div>
  </div>
);

export default StoryCard;
