import { FaSearch, FaHeart, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";

const CommunityStats = () => {
  // Sample statistics data
  const stats = [
    {
      id: 1,
      icon: (
        <FaSearch className="text-primary text-4xl dark:text-primary-light" />
      ),
      value: 1245,
      label: "Lost Items Recovered",
    },
    {
      id: 2,
      icon: (
        <FaHeart className="text-primary text-4xl dark:text-primary-light" />
      ),
      value: 687,
      label: "Active Campaigns",
    },
    {
      id: 3,
      icon: (
        <FaUsers className="text-primary text-4xl dark:text-primary-light" />
      ),
      value: 2412,
      label: "Happy Users",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-primary-light to-background-light dark:from-background-dark dark:to-primary-darkest py-12 px-6 transition">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-primary-light mb-6">
          Our Community in Numbers
        </h2>
        <p className="text-lg text-primary-medium dark:text-primary-light opacity-90 mb-10">
          Celebrating the success and contributions of our amazing community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white dark:bg-primary-dark shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:border hover:scale-105 border-primary-light dark:border-primary-lightest transition duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                />
              </h3>
              <p className="text-primary-medium dark:text-primary-light text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
