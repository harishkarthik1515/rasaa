import { ArrowLeft, MapPin, Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section className="pt-8 pb-16 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with back button */}
        <div className="flex items-center mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-2xl text-green-600 font-semibold italic mb-6">
            "Feel the Fruit. Feel Rasaa"
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            "At the heart of our operations is a commitment to delivering
            fruit-based pulps and concentrates with uncompromised purity and
            performance."
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="text-gray-700 leading-relaxed text-lg">
                <p>
                  Rasaa Foods began its journey in the early 2000s under the
                  leadership of S. Venkataramana Reddy, an agriculturist with
                  deep roots in the heart of Andhra Pradesh. From sourcing ripe
                  tropical fruits to building a robust processing ecosystem, his
                  vision turned a regional operation into a reliable name for
                  fruit ingredients.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center shadow-lg">
                <span className="text-gray-600 text-center">
                  Story Image
                  <br />
                  (Optional)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* About Rasaa */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center shadow-lg">
                <span className="text-gray-600 text-center">
                  Company Image
                  <br />
                  (Optional)
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About Rasaa
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Rasaa, since its inception, has stood for quality, commitment,
                  and prompt delivery. Our continued efforts to achieve these
                  standards have resulted in long term relations with
                  prestigious clients and have brought us to the forefront of
                  the industry.
                </p>
                <p>
                  Continuous investment in state-of-the-art machinery, a
                  quality-controlled supply chain and rigorous farm-to-factory
                  logistics ensure that our products are 100% natural with no
                  additives of any kind.
                </p>
                <p>
                  Our commitment to go above and beyond to provide quality is
                  also replicated in our relations with our employees as well as
                  the community we are a part of.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Founder Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gray-200 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                  {/* Placeholder for founder's photo */}
                  <span className="text-gray-500 text-center">
                    Founder's Photo
                    <br />
                    (Add path here)
                  </span>
                </div>
                {/* Contact info overlay */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Mr. S. Venkataramana Reddy
                  </h3>
                  <p className="text-green-600 font-semibold mb-2">
                    Managing Director, Rasaa Foods Pvt. Ltd.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Past President APFPF (Chittoor District fruit processor
                    federation)
                  </p>
                  <a
                    href="https://www.linkedin.com/in/s-venkataramana-reddy-a81387349/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Founder Details */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About our Founder
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  S. Venkataramana Reddy is the Managing Director of Rasaa Foods
                  Pvt. Ltd., one of India's most trusted manufacturers of
                  tropical fruit pulp, purée, and concentrate. With 25 years of
                  experience in the food processing sector, he has played a
                  pivotal role in driving sustainable sourcing, rural
                  employment, and supply chain efficiencies for tropical
                  fruit-based products.
                </p>
                <p>
                  As the Past President of the Chittoor District Fruit Processor
                  Federation (APFPF), Mr. Reddy was involved in initiatives to
                  support collaboration among local processors and improve
                  operations.
                </p>
                <p>
                  An agriculturist by background and born into an agricultural
                  family, Mr. Reddy brings deep-rooted understanding of farm
                  realities and rural economies to his work in the food
                  processing industry. He continues to champion efforts that
                  empower farmers, improve farm-to-factory linkages, and
                  strengthen India's agro-industrial ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* From Us to You Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            From Us to You
          </h2>

          <div className="space-y-16">
            {/* Aseptic Packaging */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Aseptic Packaging
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  All products and containers are sterilized and filled in a
                  sterile environment to retain the colour nutrition.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-gray-600 text-center">
                    Packaging Image
                    <br />
                    (Optional)
                  </span>
                </div>
              </div>
            </div>

            {/* Hassle-free Shipping */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div className="w-80 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-gray-600 text-center">
                    Shipping Image
                    <br />
                    (Optional)
                  </span>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Hassle-free Shipping
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We have access to the Chennai container terminal.
                </p>
              </div>
            </div>

            {/* Customer Service */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Customer Service
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We are committed to providing a seamless client experience.
                  Our warm, friendly and knowledgeable customer service team
                  will answer your queries and help you find solutions.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-64 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-gray-600 text-center">
                    Service Image
                    <br />
                    (Optional)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            Ready to Work With Us?
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Experience the quality and reliability that has made us a trusted
            partner worldwide.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/products"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 text-lg"
            >
              View Our Products
            </Link>
            <Link
              to="/contact"
              className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
