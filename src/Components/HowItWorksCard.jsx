import { FaFlag, FaHandshake, FaSearch } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HowItWorksCard = () => {
  // Steps data
  const steps = [
    {
      id: 1,
      icon: <FaFlag className="text-primary text-4xl mb-4" />,
      title: "Report Your Lost Item",
      description:
        "Easily report your lost belongings with essential details and let the community assist in finding them.",
    },
    {
      id: 2,
      icon: <FaSearch className="text-primary text-4xl mb-4" />,
      title: "Search Lost & Found Items",
      description:
        "Browse through reported items or start a campaign to recover what's lost quickly.",
    },
    {
      id: 3,
      icon: <FaHandshake className="text-primary text-4xl mb-4" />,
      title: "Connect & Recover",
      description:
        "Collaborate with others to return lost items to their rightful owners. Together, we make it possible!",
    },
    {
      id: 4,
      icon: <FaFlag className="text-primary text-4xl mb-4" />,
      title: "Start a Campaign",
      description:
        "Launch a campaign and gather support from the community to find your lost belongings.",
    },
    {
      id: 5,
      icon: <FaHandshake className="text-primary text-4xl mb-4" />,
      title: "Track Progress",
      description:
        "Stay updated on the progress of your campaigns and connect with those offering help.",
    },
  ];

  // Grouping two cards per slide
  const groupedSteps = [];
  for (let i = 0; i < steps.length; i += 2) {
    groupedSteps.push(steps.slice(i, i + 2));
  }

  // Carousel responsiveness settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, // One slide containing two cards
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1, // One slide containing two cards
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1, // One slide containing two cards
    },
  };

  return (
    <section className="bg-primary-lightest py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          arrows={false}
        >
          <div className="flex flex-col items-center mx-2 bg-primary-light  rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div>{steps[0].icon}</div>
            <h3 className="text-2xl font-bold text-primary-dark mb-2">
              {steps[0].title}
            </h3>
            <p className="text-primary-medium text-center">
              {steps[0].description}
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-center bg-primary-light  rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div>{steps[1].icon}</div>
            <h3 className="text-2xl font-bold text-primary-dark mb-2">
              {steps[1].title}
            </h3>
            <p className="text-primary-medium text-center">
              {steps[1].description}
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-center bg-primary-light  rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div>{steps[2].icon}</div>
            <h3 className="text-2xl font-bold text-primary-dark mb-2">
              {steps[2].title}
            </h3>
            <p className="text-primary-medium text-center">
              {steps[2].description}
            </p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HowItWorksCard;
