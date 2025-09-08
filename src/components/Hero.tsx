import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={heroRef} id="home">
      {/* Top colored band */}
      <div className="w-full bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left column - Text content */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                From orchards to industries,
                <span className="block mt-2 text-green-600">
                  we transform nature's harvest into pulp
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
                Rasaa has earned the trust of partners worldwide delivering pure
                fruit puree and concentrates since 2003.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  to="/products"
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 inline-block"
                >
                  Explore Products
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-green-600 text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 inline-block"
                >
                  Contact Us
                </Link>
              </div>

              {/* Key stats with increasing numbers */}
              <div className="flex flex-wrap gap-6 mt-10 justify-center md:justify-start">
                <RollingCard label="Years Experience" end={20} prefix="• " />
                <RollingCard
                  label="Ton Daily Production"
                  end={250}
                  prefix="• "
                />
                <RollingCard
                  label="Metric Ton Storage Space"
                  end={20000}
                  prefix="• "
                />
              </div>
            </div>

            {/* Right column - Main image */}
            <div className="flex justify-center items-center order-1 md:order-2">
              <div className="relative">
                {/* Main image only - using project public mango image */}
                <InteractiveImage
                  imageSrc="/mango-still-life-removebg-preview.png"
                  sensorRef={heroRef}
                />
              </div>
            </div>
          </div>
        </div>
        {/* SVG wave divider to white below */}
        <div className="-mt-2">
          <svg
            viewBox="0 0 1440 120"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C360,120 720,0 1440,40 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

// RollingCard component for displaying statistics with increasing numbers
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
    const duration = 2000; // Reduced duration for faster animation
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
    <div
      className="bg-gradient-to-r from-green-50 via-white to-green-100 border border-green-200 rounded-xl px-4 py-2 shadow-md 
                   transition-all duration-300 hover:shadow-lg hover:border-green-400 min-w-[140px]"
    >
      <div className="flex items-center gap-1 justify-center md:justify-start">
        <span className="inline-block text-green-600 text-lg font-bold">
          {prefix}
        </span>
        <span className="text-2xl font-bold text-gray-800">
          {count.toLocaleString()}
          {suffix}
        </span>
      </div>
      <div className="text-xs font-medium text-gray-600 mt-1 text-center md:text-left">
        {label}
      </div>
    </div>
  );
}

// InteractiveImage: mouse-tilt + giggle animation on hover
function InteractiveImage({
  imageSrc,
  sensorRef,
}: {
  imageSrc?: string;
  sensorRef?: React.RefObject<HTMLElement | null>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // choose sensor: external hero/sensorRef or the image wrapper itself
    const sensorNode = (sensorRef && sensorRef.current) || ref.current;
    if (!sensorNode) return;

    function onMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      // Subtler tilt sensitivity
      const rx = (y / rect.height) * -6; // rotateX (reduced)
      const ry = (x / rect.width) * 6; // rotateY (reduced)
      // No zoom/scale — keep scale at 1
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1)`;
    }

    function onEnter() {
      const el = ref.current;
      if (!el) return;
      setHovered(true);
      // No giggle; we rely on mousemove tilt + smooth transition for 3D hover effect
      el.style.transition = "transform 260ms cubic-bezier(.2,.8,.2,1)";
    }

    function onLeave() {
      const el = ref.current;
      if (!el) return;
      setHovered(false);
      // smoothly return to neutral
      el.style.transition = "transform 600ms cubic-bezier(.2,.8,.2,1)";
      el.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    }

    sensorNode.addEventListener("mousemove", onMove);
    sensorNode.addEventListener("mouseenter", onEnter);
    sensorNode.addEventListener("mouseleave", onLeave);

    return () => {
      sensorNode.removeEventListener("mousemove", onMove);
      sensorNode.removeEventListener("mouseenter", onEnter);
      sensorNode.removeEventListener("mouseleave", onLeave);
    };
  }, [hovered, sensorRef]);

  return (
    <div
      ref={ref}
      className="inline-block transition-transform duration-300"
      style={{ willChange: "transform" }}
    >
      {/* 3D hover handled via JS mousemove + transitions; no keyframes/giggle */}
      <img
        src={
          imageSrc ||
          "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
        alt="Fresh mango"
        className="block max-w-full w-auto h-auto"
      />
    </div>
  );
}

export default Hero;
