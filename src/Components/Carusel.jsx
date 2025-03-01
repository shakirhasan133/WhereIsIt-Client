/* eslint-disable react/no-unescaped-entities */
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Carusal() {
  return (
    <Carousel className="h-[90vh]" autoplay={true} loop>
      {/* Slide 1 */}
      <div className="relative h-[90vh] w-full">
        <img
          src="https://i.ibb.co.com/5Lc24MZ/lost-any-item.webp"
          alt="Empower Dreams"
          className="h-[90vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
          <div className="text-center px-4 md:px-8">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-5xl font-bold text-white font-primary"
            >
              Lost Something Important?
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="w-2/3 mx-auto mb-6 text-white opacity-95 text-lg md:text-xl font-primary"
            >
              Post your lost item now and let our network help you find it.
              Every moment counts when it comes to reuniting with your
              belongings.
            </Typography>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={"/addItems"}>
                <Button
                  size="lg"
                  color="white"
                  className=" px-5 py-3 w-full text-left hover:bg-primary-dark hover:text-primary-light transition"
                >
                  Report Lost Item
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative h-[90vh] w-full">
        <img
          src="https://i.ibb.co.com/6ZNZ34V/be-a-part-of-solutions.webp"
          alt="Create Campaign"
          className="h-[90vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
          <div className="text-center px-4 md:px-8">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-5xl font-bold text-white font-primary"
            >
              Be Part of the Solution
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="w-2/3 mx-auto mb-6 text-white opacity-95 text-lg md:text-xl font-primary"
            >
              Help others in need by reporting found items. Together, we can
              make a difference by returning lost things to their rightful
              owners.
            </Typography>
            <Link to={"/addItems"}>
              <Button
                size="lg"
                color="white"
                className="px-5 py-3 text-center hover:bg-primary-dark hover:text-primary-light transition font-primary"
              >
                Add Found Item
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative h-[90vh] w-full">
        <img
          src="https://i.ibb.co.com/m5qQCKH/addcontribute.jpg"
          alt="Recently Recovered Items"
          className="h-[90vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
          <div className="text-center px-4 md:px-8">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-5xl font-bold text-white font-primary"
            >
              Recently Recovered Items
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 text-white w-2/3 mx-auto opacity-95 text-lg md:text-xl font-primary"
            >
              Explore the items our community has successfully recovered. From
              phones to keys, these success stories highlight the power of
              connection and care.
            </Typography>
            <Link to={"/myItems"}>
              <Button
                size="lg"
                color="white"
                className=" px-5 py-3 text-center hover:bg-primary-dark hover:text-primary-light transition font-primary"
              >
                Manage My Items
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
