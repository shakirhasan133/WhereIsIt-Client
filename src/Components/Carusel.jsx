/* eslint-disable react/no-unescaped-entities */
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Carusal() {
  return (
    <Carousel className="h-[90vh]" autoplay={true} loop>
      {/* Slide 1 */}
      <div className="relative h-[90vh] w-full">
        <img
          src="https://ideogram.ai/assets/image/lossless/response/L7WyxCyHTXmgZ6My9COwug"
          alt="Empower Dreams"
          className="h-[90vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
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
              <Link to={"/lost-found-items"}>
                <Button
                  size="lg"
                  color="white"
                  className="bg-primary-light text-primary-dark font-medium rounded-md hover:bg-primary-medium hover:text-primary-light transition font-primary"
                >
                  Report Lost Item
                </Button>
              </Link>
              <Link to={"/recovered-items"}>
                <Button
                  size="lg"
                  variant="text"
                  className="text-white border-white hover:bg-primary-teal hover:text-black transition font-primary"
                >
                  View Recovered Items
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative h-[90vh] w-full">
        <img
          src="https://ideogram.ai/assets/image/lossless/response/vf5-c5iSTkmaYLeKIyCHKw"
          alt="Create Campaign"
          className="h-[90vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
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
            <Link to={"/add-item"}>
              <Button
                size="lg"
                color="white"
                className="bg-primary-light text-primary-dark font-medium rounded-md hover:bg-primary-medium hover:text-primary-light transition font-primary"
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
          src="https://ideogram.ai/assets/progressive-image/balanced/response/3JwU8XeBRk-BhK-4OSJNag"
          alt="Recently Recovered Items"
          className="h-[90vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
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
            <Link to={"/my-items"}>
              <Button
                size="lg"
                color="white"
                className="bg-primary-light text-primary-dark font-medium rounded-md hover:bg-primary-medium hover:text-primary-light transition font-primary"
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
