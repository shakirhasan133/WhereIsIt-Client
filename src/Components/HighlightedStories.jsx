import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";

const HighlightedStories = () => {
  // Sample data for highlighted stories
  const stories = [
    {
      id: 1,
      userName: "John Doe",
      userImage: "https://via.placeholder.com/100",
      story:
        "I lost my wallet at the park, but thanks to this platform, I got it back within hours!",
      date: "December 18, 2024",
    },
    {
      id: 2,
      userName: "Emily Johnson",
      userImage: "https://via.placeholder.com/100",
      story:
        "My dog went missing last week. A kind person found him and contacted me here. So grateful!",
      date: "December 20, 2024",
    },
    {
      id: 3,
      userName: "David Smith",
      userImage: "https://via.placeholder.com/100",
      story:
        "Lost my car keys in a mall. Posted here and someone found them the same day. Amazing platform!",
      date: "December 22, 2024",
    },
  ];

  return (
    <section className="bg-primary-lightest py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-6">
          Highlighted Stories
        </h2>
        <p className="text-lg text-primary-medium text-center mb-10">
          Heartwarming success stories from our amazing community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-xl hover:border border-primary-light hover:-translate-y-1 duration-300"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img
                    src={story.userImage}
                    alt={`${story.userName}'s story`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">
                  {story.userName}
                </h3>
                <p className="text-primary-medium text-sm italic mb-4">
                  <FaQuoteLeft className="inline mr-2" />
                  {story.story}
                </p>
                <span className="text-sm text-primary-light">{story.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/success-stories">
            <button className="px-6 py-3 bg-primary-dark text-white font-medium rounded-md hover:bg-primary-medium transition">
              View All Stories
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HighlightedStories;
