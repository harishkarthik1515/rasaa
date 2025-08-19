import { ArrowRight, User } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-green-50 to-orange-50 overflow-hidden"
    >
      {/* Enhanced Curved top */}
      <svg
        className="absolute -top-1 left-0 w-full h-24 z-0"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L1440,0 L1440,40 C1080,100 360,100 0,40 Z"
          fill="#ffffff"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Fruit processing facility"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center space-x-3">
                <User className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-800">
                    S. Venkataramana Reddy
                  </p>
                  <p className="text-sm text-gray-600">
                    Founder & Agriculturist
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
              <p className="text-2xl text-green-600 font-semibold italic mb-6">
                "Feel the Fruit. Feel Rasaa"
              </p>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At the heart of our operations is a commitment to delivering
                fruit-based pulps and concentrates with uncompromised purity and
                performance.
              </p>

              <p>
                Rasaa Foods began its journey in the early 2000s under the
                leadership of S. Venkataramana Reddy, an agriculturist with deep
                roots in the heart of Andhra Pradesh.
              </p>

              <p>
                From sourcing ripe tropical fruits to building a robust
                processing ecosystem, his vision turned a regional operation
                into a reliable name for fruit purees and concentrates.
              </p>
            </div>

            <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mt-8">
              View More About Us <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Curved bottom */}
      <svg
        className="absolute -bottom-1 left-0 w-full h-24 z-0"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 L1440,120 L1440,80 C1080,20 360,20 0,80 Z"
          fill="#ffffff"
        />
      </svg>

      {/* Optional: Add floating elements for extra visual appeal */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
    </section>
  );
};

export default About;
