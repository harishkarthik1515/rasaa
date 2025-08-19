import { Calendar, Zap, Target } from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      icon: Calendar,
      title: "Since 2003",
      subtitle: "Our Foundation",
      description:
        "Delivering the best quality products and experience to clients across the world since 2003",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Present Power",
      subtitle: "Our Capabilities",
      description:
        "Our 10-acre factory is well equipped with the latest manufacturing machinery along with an advanced storage capacity of 20,000 metric tonnes.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Target,
      title: "Future Aim",
      subtitle: "Our Vision",
      description:
        "Our aim is to be a global leader in tropical fruit product supplies.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(120deg, #c6f6d5 60%, #fff176 100%)",
        minHeight: "600px",
      }}
    >
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

      {/* Fruit image collage background clipped to top curve */}
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
          src="/DSC_3786.jpg"
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
          <p className="text-xl text-black max-w-3xl mx-auto font-bold">
            From humble beginnings to global aspirations - the Rasaa story of
            growth and excellence
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center text-center relative"
              style={{ minHeight: "340px", animationDelay: `${index * 250}ms` }}
            >
              {/* Icon at top */}
              <div
                className={`bg-white shadow-md rounded-full p-4 mb-6 flex items-center justify-center`}
              >
                <item.icon className={`h-12 w-12 text-gray-700`} />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-extrabold text-gray-800 mb-2 tracking-tight">
                {item.title}
              </h3>
              {/* Subtitle */}
              <p className="text-lg font-semibold text-green-600 mb-4">
                {item.subtitle}
              </p>
              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base">
                {item.description}
              </p>
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

export default Timeline;
