import { Shield, CheckCircle, Award, Clock } from "lucide-react";

const Quality = () => {
  const qualityFeatures = [
    {
      icon: Shield,
      title: "Commercially Sterile",
      description:
        "Free from bacillus, osmophilic yeast, coliform and other pathogenic microorganisms",
      bgColor: "bg-gradient-to-b from-red-400 to-red-500",
      buttonColor: "bg-red-300 hover:bg-red-400",
    },
    {
      icon: CheckCircle,
      title: "Certified Safe",
      description:
        "Safe for human consumption with up to 24 months shelf life from manufacture date",
      bgColor: "bg-gradient-to-b from-green-500 to-green-600",
      buttonColor: "bg-green-400 hover:bg-green-500",
    },
    {
      icon: Award,
      title: "Pure & Natural",
      description:
        "No added sugar, dyestuff, synthetic flavour, stabilizers, or artificial additives",
      bgColor: "bg-gradient-to-b from-orange-400 to-orange-500",
      buttonColor: "bg-orange-300 hover:bg-orange-400",
    },
    {
      icon: Clock,
      title: "Zero Contamination",
      description:
        "Free from pesticidal, herbicidal residues and radioactive contamination",
      bgColor: "bg-gradient-to-b from-blue-400 to-blue-500",
      buttonColor: "bg-blue-300 hover:bg-blue-400",
    },
  ];

  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Quality you can Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            All our products meet the highest international standards for food
            safety, purity, and quality assurance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityFeatures.map((feature, index) => (
            <div
              key={index}
              className={`rounded-b-full rounded-t-none p-8 pt-12 pb-16 text-white max-w-sm mx-auto lg:mx-0 relative transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl flex flex-col items-center`}
              style={{
                minHeight: "440px",
                width: "280px",
                animationDelay: `${index * 150}ms`,
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                borderBottomLeftRadius: "140px",
                borderBottomRightRadius: "140px",
                background:
                  index === 0
                    ? "linear-gradient(135deg, #ff6a6a 0%, #ffb6b9 100%)"
                    : index === 1
                    ? "linear-gradient(135deg, #00c853 0%, #b2ff59 100%)"
                    : index === 2
                    ? "linear-gradient(135deg, #ff9800 0%, #ffd54f 100%)"
                    : "linear-gradient(135deg, #448aff 0%, #b3e5fc 100%)",
              }}
            >
              {/* Icon at the top */}
              <div className="flex justify-center mb-8">
                <div className="bg-white bg-opacity-20 p-4 rounded-full backdrop-blur-sm">
                  <feature.icon className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-center mb-6 tracking-wide">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white text-center leading-relaxed mb-8 px-2 text-sm font-medium opacity-95">
                {feature.description}
              </p>

              {/* Hanging line */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-1 h-16 bg-white/70" />
            </div>
          ))}
        </div>
        {/* Hanging Read More buttons below cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-0">
          {qualityFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              style={{ width: "280px", margin: "0 auto" }}
            >
              <div className="w-1 h-4 bg-transparent" />
              <button
                className={`${feature.buttonColor} text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm mt-0`}
                style={{ marginTop: "0px" }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
