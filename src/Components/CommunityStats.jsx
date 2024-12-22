import { FaSearch, FaHeart, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";

const CommunityStats = () => {
  // Sample statistics data
  const stats = [
    {
      id: 1,
      icon: <FaSearch className="text-primary text-4xl" />,
      value: 1245,
      label: "Lost Items Recovered",
    },
    {
      id: 2,
      icon: <FaHeart className="text-primary text-4xl" />,
      value: 687,
      label: "Active Campaigns",
    },
    {
      id: 3,
      icon: <FaUsers className="text-primary text-4xl" />,
      value: 2412,
      label: "Happy Users",
    },
  ];

  return (
    <section className="bg-primary-lightest py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Our Community in Numbers
        </h2>
        <p className="text-lg text-primary-medium mb-10">
          Celebrating the success and contributions of our amazing community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:border hover:scale-105 border-primary-light transition duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-primary-dark">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                />
              </h3>
              <p className="text-primary-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
