import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const GroupCompaniesPage = () => {
  return (
    <section className="pt-8 pb-16 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Group of Companies
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            A diverse portfolio of businesses united by our commitment to
            quality, innovation, and sustainable growth across multiple
            industries.
          </p>
        </div>

        {/* DY Poultry Farms */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <img
                    src="Dy Poultry Vertical Transparent.png"
                    alt="DY Poultry Farms Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    DY Poultry Farms
                  </h2>
                  <p className="text-green-600 font-semibold">
                    Established 2024
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Established in 2024, we operate modern farms backed by
                state-of-the-art infrastructure and a dedicated team driven by
                care and precision. We believe that healthy birds lead to
                healthy meals, and we raise them with that purpose in mind.
              </p>
              <a
                href="https://dypoultry-farms.vercel.app/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </a>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-64 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="dypoultry.jpg"
                  alt="DY Poultry Farms"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dhiraj Agro Private Limited */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-80 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="dhiraj.jpeg"
                  alt="Dhiraj Agro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold text-center">
                    Dhiraj Logo
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Dhiraj Agro Private Limited
                  </h2>
                  <p className="text-green-600 font-semibold">
                    Operating since 2012
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Operating since 2012, Dhiraj Agro is a trusted Bailey franchise
                under Parle Agro, distributing packaged drinking water across
                South Andhra through a strong network of 120 distributors.
              </p>
            </div>
          </div>
        </div>

        {/* SSR Agro Private Limited */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                  <img
                    src="ssragro.png"
                    alt="SSR Agro Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    SSR Agro Private Limited
                  </h2>
                  <p className="text-green-600 font-semibold">Since 2016</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since 2016, SSR Agro has been advancing sustainability through
                solar energy with a 2 MW installed capacity. We've generated
                over 69 million kWh, reduced 57 million kg of CO₂, and made an
                impact equal to planting 2.7 million trees powering a cleaner,
                greener future.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src="ssragro.png"
                alt="SSR Agro Logo"
                className="w-26 h-26 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Ispeed Motors */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                src="ispeed.png"
                alt="iSpeed Motors Logo"
                className="w-26 h-26  flex object-contain"
              />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold text-center">
                    iSpeed Logo
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    iSpeed Motors
                  </h2>
                  <p className="text-green-600 font-semibold">
                    Established 2015
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Established in 2015, iSpeed Motors is an authorized Royal
                Enfield dealership known for its prompt service, expert
                technicians, and customer-first approach. From seamless vehicle
                delivery to reliable after-sales support, iSpeed brings both
                performance and trust to every ride.
              </p>
            </div>
          </div>
        </div>

        {/* Katur Farm Fresh */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="dragonfruit.png"
                  alt="DY Poultry Farms Logo"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Katur Farm Fresh
                  </h2>
                  <p className="text-green-600 font-semibold">Started 2022</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Katur Farm was started in 2022 by our founder, a farmer at heart
                with a deep passion for agriculture. Rooted in this love for the
                land, we grow organic, pesticide-free dragon fruit, delivering
                fresh, wholesome produce to local markets with care and
                commitment.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-64 bg-gradient-to-br from-purple-100 to-pink-200 rounded-3xl flex items-center justify-center shadow-lg">
                <img
                  src="dragonfruit.png"
                  alt="dragon fruit"
                  className="w-26 h-26 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Certifications
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {/* APEDA */}
            <div className="flex flex-col items-center space-y-3">
              <img
                src="apeda.png"
                alt="APEDA Logo"
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* ISO 22000:2018 */}
            <div className="flex flex-col items-center space-y-3">
              <img
                src="iso.png"
                alt="ISO 22000:2018 Logo"
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* FSSAI */}
            <div className="flex flex-col items-center space-y-3">
              <img
                src="fssai.png"
                alt="fssaiLogo"
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* Made in India */}
            <div className="flex flex-col items-center space-y-3">
              <img
                src="madeindia.png"
                alt="mi Logo"
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* Halal */}
            <div className="flex flex-col items-center space-y-3">
              <img
                src="halal.png"
                alt="Halal  Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupCompaniesPage;
