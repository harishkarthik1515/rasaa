import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          {/* Main heading and tagline */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 leading-tight">
              From orchards to industries,
              <br />
              <span className="text-green-600">we transform nature's harvest into pulp</span>
            </h1>
            
            {/* Arched tagline */}
            <div className="flex justify-center mb-8">
              <svg width="400" height="80" viewBox="0 0 400 80">
                <path id="curve" d="M20,60 Q200,20 380,60" fill="transparent" />
                <text
                  width="400"
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "serif",
                    fill: "#166534",
                    fontWeight: "600"
                  }}
                >
                  <textPath href="#curve">Feel the Fruit. Feel Rasaa</textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Center image - larger and more prominent */}
          <div className="w-96 h-[600px] rounded-[100px] overflow-hidden shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Premium fruit processing"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="bg-green-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Discover Our Products
            </button>
          </div>

          {/* Rolling stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-12">
            <RollingCard
              label="Years of Experience"
              end={20}
              prefix="● "
            />
            <RollingCard 
              label="Ton Daily Production" 
              end={250} 
              prefix="● " 
            />
            <RollingCard
              label="Metric Ton Storage"
              end={20000}
              prefix="● "
            />
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
    const duration = 3000;
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
    <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl px-6 py-4 shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:border-green-400 hover:scale-105">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-green-600 text-lg font-bold">
          {prefix}
        </span>
        <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
          {count.toLocaleString()}
          {suffix}
        </span>
      </div>
      <div className="text-sm font-medium text-gray-600 tracking-wide">
        {label}
      </div>
    </div>
  );
}

export default Hero;