import HowItWorksCard from "./HowItWorksCard";

const HowItWorks = () => {
  return (
    <section className="bg-primary-lightest py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4 text-center">
        How it works
      </h2>
      <p className="text-lg text-primary-medium mb-10 text-center">
        Discover the steps to report, search, and recover lost items with ease.
      </p>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Image Section */}

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co.com/0VcXN0H/how-it-works.jpg"
            alt="How it works visual"
            className="rounded-lg  object-cover w-full md:max-w-[400px]"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 bg-primary-light">
          <HowItWorksCard></HowItWorksCard>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
