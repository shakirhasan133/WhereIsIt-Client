import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StoryCard from "./StoryCard";
import { useEffect, useState } from "react";
import UseAxiosSecure from "./../hooks/UseAxiosSecure";

const HighlightedStories = () => {
  const AxiosSecure = UseAxiosSecure();
  const [stories, setStories] = useState([]);
  console.log(stories);

  // const stories = [
  //   {
  //     id: 1,
  //     userName: "John Doe",
  //     userImage: "https://via.placeholder.com/100",
  //     story:
  //       "I lost my wallet at the park, but thanks to this platform, I got it back within hours!",
  //     date: "December 18, 2024",
  //   },
  //   {
  //     id: 2,
  //     userName: "Emily Johnson",
  //     userImage: "https://via.placeholder.com/100",
  //     story:
  //       "My dog went missing last week. A kind person found him and contacted me here. So grateful!",
  //     date: "December 20, 2024",
  //   },
  //   {
  //     id: 3,
  //     userName: "David Smith",
  //     userImage: "https://via.placeholder.com/100",
  //     story:
  //       "Lost my car keys in a mall. Posted here and someone found them the same day. Amazing platform!",
  //     date: "December 22, 2024",
  //   },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await AxiosSecure.get("/reviews");
      setStories(data);
    };
    fetchData();
  }, [AxiosSecure]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <section className="bg-gradient-to-b to-primary-light from-background-light py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-6">
          Highlighted Stories
        </h2>
        <p className="text-lg text-primary-medium text-center mb-10">
          Heartwarming success stories from our amazing community.
        </p>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-padding-bottom"
          dotListClass=""
          draggable
          focusOnSelect
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {stories.map((story) => (
            <StoryCard key={story._id} story={story} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HighlightedStories;
