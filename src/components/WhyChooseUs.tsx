import { Star, RefreshCw, HeadphonesIcon } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Star,
      title: "QUALITY",
      subtitle: "Because Compromise Isn't an Option",
      description:
        "Our partners choose us for our obsession with quality. Each drum is sterile, safe, and lab-tested with zero additives, contaminants, or shortcuts. The kind of quality that global brands demand, and Rasaa delivers.",
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
    },
    {
      icon: RefreshCw,
      title: "CONSISTENCY",
      subtitle: "Same Taste. Every Time.",
      description:
        "At Rasaa, we believe repeat orders deserve repeat excellence. Our process controls, seasonal planning, and farmer partnerships ensure that every batch matches the one before in taste, colour, texture, and performance.",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: HeadphonesIcon,
      title: "SERVICE",
      subtitle: "We Don't Just Supply. We Support.",
      description:
        "We're more than just a supplier. We're your sourcing partner. From export documents to custom blends and smooth logistics, we make it easy. No delays, no stress.",
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Curved top SVG from About */}
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

      {/* Related background image (mango juice) clipped to top curve */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        style={{ overflow: "hidden", top: "0" }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-24"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ zIndex: 1 }}
        >
          <path
            d="M0,0 L1440,0 L1440,40 C1080,100 360,100 0,40 Z"
            fill="#ffffff"
          />
        </svg>
        <img
          src="/DSC_4016.jpg"
          alt="Mango Juice Background"
          className="w-full h-full object-cover opacity-80"
          style={{
            position: "absolute",
            top: "24px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
            Trusted by Leading Brands For
          </h2>
          <p className="text-xl  text-white max-w-3xl mx-auto drop-shadow-lg">
            What our clients value in us and what makes us their preferred
            partner
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-visible shadow-lg group flex flex-col items-center justify-center min-h-[340px] bg-white/80 border border-gray-200 transition-all duration-400 hover:shadow-2xl hover:border-$$${
                index === 0 ? "green" : index === 1 ? "orange" : "blue"
              }-400`}
              style={{
                boxShadow: `0 4px 24px 0 rgba(31, 38, 135, 0.10)`,
              }}
            >
              <div className="relative z-10 flex flex-col items-center pt-10 pb-8 px-6">
                <feature.icon
                  className={`h-8 w-8 mb-4 text-$$${
                    index === 0 ? "green" : index === 1 ? "orange" : "blue"
                  }-500`}
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-tight text-center">
                  {feature.title}
                </h3>
                <div className="text-sm font-semibold text-gray-500 mb-3 text-center">
                  {feature.subtitle}
                </div>
                <div className="w-8 h-0.5 rounded-full bg-gray-200 mb-4" />
                <p className="text-gray-600 text-base font-medium mb-2 text-center opacity-90">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Curved bottom SVG from About */}
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
    </section>
  );
};

export default WhyChooseUs;
