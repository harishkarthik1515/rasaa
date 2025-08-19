import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <section id="home" className="pt-1 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left column */}
          <div className="flex flex-col items-start justify-center space-y-8">
            <div>
              <h1 className="text-5xl font-serif font-bold text-gray-900 leading-tight mb-4">
                From Indian farms to
                <br />
                <span className="text-green-600">international shelves</span>
              </h1>
              <p className="text-lg text-gray-700 mb-6 max-w-xs">
                Rasaa has earned the trust of partners worldwide delivering pure
                fruit puree and concentrates since 2003.
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 mb-6">
                Our Products
              </button>
            </div>
            <div className="flex gap-4">
              <img
                src="DSC_3786.jpg"
                alt="fruit"
                className="w-28 h-40 object-cover rounded-[40px] shadow-lg"
              />
              <img
                src="DSC_4016.jpg"
                alt="fruit"
                className="w-28 h-40 object-cover rounded-[40px] shadow-lg"
              />
            </div>
          </div>

          {/* Center column */}
          <div className="flex flex-col items-center justify-center relative">
            {/* Arched text - improved visibility */}
            <div className="w-full flex justify-center mb-2">
              <svg width="260" height="60" viewBox="0 0 260 60">
                <path id="curve" d="M10,45 Q130,10 250,45" fill="transparent" />
                <text
                  width="260"
                  style={{
                    fontSize: "1.25rem",
                    fontFamily: "serif",
                    fill: "#166534",
                  }}
                >
                  <textPath href="#curve"> Feel the Fruit. Feel Rasaa</textPath>
                </text>
              </svg>
            </div>
            {/* Main oval image */}
            <div className="w-64 h-96 rounded-[60px] overflow-hidden shadow-2xl flex items-center justify-center">
              <img
                src="DSC_3872.jpg"
                alt="fruits"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-end justify-center space-y-8">
            <div className="flex gap-4 mb-6">
              <img
                src="DSC_6807.jpg"
                alt="fruit"
                className="w-28 h-40 object-cover rounded-[40px] shadow-lg"
              />
              <img
                src="DSC_3907.jpg"
                alt="fruit"
                className="w-28 h-40 object-cover rounded-[40px] shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-700 max-w-xs text-right mb-4">
              Rasaa has earned the trust of partners worldwide delivering pure
              fruit puree and concentrates since 2003.
            </p>
            {/* Rolling number cards */}
            <div className="flex flex-col gap-3 items-end w-full max-w-xs">
              <RollingCard
                label="years of Food Processing Experience"
                end={20}
                prefix="● "
              />
              <RollingCard label="Ton Daily production" end={250} prefix="● " />
              <RollingCard
                label="Metric Ton Storage Space"
                end={20000}
                prefix="● "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// RollingCard component
function RollingCard({
  label,
  end,
  prefix = "",
  suffix = "",
}: {
  label: string;
  end: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 10000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return (
    <div className="bg-gradient-to-r from-green-50 via-white to-green-100 border border-green-400 rounded-xl px-5 py-3 shadow-lg min-w-[140px] text-right flex flex-col items-end transition-all duration-300 hover:shadow-2xl hover:border-green-600">
      <div className="flex items-center gap-2">
        <span className="inline-block text-green-600 text-xl font-bold">
          {prefix}
        </span>
        <span className="text-2xl font-extrabold text-gray-900 tracking-tight animate-pulse">
          {count}
          {suffix}
        </span>
      </div>
      <div className="text-xs font-medium text-gray-600 mt-1 tracking-wide uppercase whitespace-normal text-right">
        {label}
      </div>
    </div>
  );
}

export default Hero;
