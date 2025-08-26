import { ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const bg = "/flux2.png";
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative hidden lg:block">
            <img
              src="/DSC_4085.jpg"
              alt="Founder"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
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

          <div className="space-y-6 text-black">
            <div>
              <h2 className="text-4xl font-bold text-black mb-4">About Us</h2>
              <p className="text-2xl text-gray-800 font-semibold italic mb-6">
                "Feel the Fruit. Feel Rasaa"
              </p>
            </div>

            <div className="space-y-4 leading-relaxed text-gray-800">
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

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 mt-8"
            >
              View More About Us <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Curved decorations removed */}

      {/* floating round decorations removed */}
    </section>
  );
};

export default About;
