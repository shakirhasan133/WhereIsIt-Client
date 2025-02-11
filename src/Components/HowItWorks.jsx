import HowItWorksCard from "./HowItWorksCard";

const HowItWorks = () => {
  return (
    <section className="bg-primary-lightest dark:bg-background-dark py-12 px-6 transition">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-primary-light mb-4 text-center">
        How it works
      </h2>
      <p className="text-lg text-primary-medium dark:text-primary-light opacity-90 mb-10 text-center">
        Discover the steps to report, search, and recover lost items with ease.
      </p>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co.com/0VcXN0H/how-it-works.jpg"
            alt="How it works visual"
            className="rounded-lg object-cover w-full md:max-w-[400px] shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 bg-primary-light dark:bg-primary-dark p-6 rounded-lg shadow-lg">
          <HowItWorksCard />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
