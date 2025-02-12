/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-dark dark:text-primary-light mb-6">
            About WhereIsIt
          </h1>
          <p className="text-md md:text-xl text-text-light dark:text-white max-w-3xl mx-auto leading-relaxed">
            WhereIsIt is designed to bridge the gap between those who lose items
            and those who find them. By providing a streamlined platform, users
            can report lost and found items, ensuring quick and effective
            recovery.
          </p>
          <div className="relative overflow-hidden rounded-2xl shadow-lg mt-12">
            <img
              src="https://i.ibb.co/4wjwBJqt/Where-Is-It-min-2.png"
              alt="WhereIsIt Platform"
              className="w-full h-96 object-cover"
            />
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-text-dark dark:text-text-light mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Report Lost Item",
                desc: "Quickly create a listing with details and location.",
                icon: "📝",
              },
              {
                title: "Smart Matching",
                desc: "Our AI matches lost and found items instantly.",
                icon: "🔍",
              },
              {
                title: "Secure Recovery",
                desc: "Verify ownership and recover items safely.",
                icon: "✅",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-light p-8 rounded-2xl shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-light dark:bg-primary-dark rounded-xl flex items-center justify-center text-3xl mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-text-dark dark:text-text-light">
                    {step.title}
                  </h3>
                </div>
                <p className="text-text-light dark:text-text-dark text-lg">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose WhereIsIt? */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-text-dark dark:text-text-light mb-12">
            Why Choose WhereIsIt?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI-Powered Matching",
                icon: "🤖",
                desc: "Advanced AI connects lost and found items effectively.",
              },
              {
                title: "Community Alerts",
                icon: "🔔",
                desc: "Get real-time alerts when a matching item is found.",
              },
              {
                title: "Secure & Verified Listings",
                icon: "🔐",
                desc: "Ensuring safe and trustworthy item recovery.",
              },
              {
                title: "User-Friendly Experience",
                icon: "📱",
                desc: "Easy navigation for quick reporting and retrieval.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-light p-6 rounded-xl border border-primary-light dark:border-primary-dark hover:border-primary-dark dark:hover:border-primary-light transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-text-dark dark:text-text-light">
                  {feature.title}
                </h3>
                <p className="text-text-light dark:text-text-dark">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <div className="bg-primary-dark dark:bg-primary-dark text-white rounded-2xl p-12 mb-20 text-center">
          <h3 className="text-3xl font-bold mb-8">Trusted by Thousands</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-5xl font-bold">50K+</div>
              <div className="text-primary-light">Successful Reunions</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">98%</div>
              <div className="text-primary-light">Recovery Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">1M+</div>
              <div className="text-primary-light">Active Users</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-text-dark dark:text-text-light mb-8">
            Ready to Find What's Missing?
          </h2>
          <a
            href="https://whereisit-by-shakir.netlify.app/allitems"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary-darkest dark:bg-primary-lightest text-white text-xl font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Start Your Search Now →
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
