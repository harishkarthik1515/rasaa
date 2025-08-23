import About from "../components/About";
import Timeline from "../components/Timeline";

const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-green-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Rasaa Foods</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our journey, values, and commitment to delivering premium fruit products worldwide.
          </p>
        </div>
      </div>
      <About />
      <Timeline />
    </div>
  );
};

export default AboutPage;