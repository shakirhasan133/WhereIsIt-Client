import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StoryCard from "./StoryCard";
import { useEffect, useState } from "react";
import UseAxiosSecure from "./../hooks/UseAxiosSecure";

const HighlightedStories = () => {
  const AxiosSecure = UseAxiosSecure();
  const [stories, setStories] = useState([]);

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
    <section className="bg-gradient-to-b to-primary-light from-background-light dark:to-background-dark dark:from-primary-darkest py-12 px-6 transition">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-primary-light text-center mb-6">
          Highlighted Stories
        </h2>
        <p className="text-lg text-primary-medium dark:text-primary-light opacity-90 text-center mb-10">
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
          itemClass=" rounded-lg shadow-lg"
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
