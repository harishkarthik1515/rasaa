import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GalleryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Fresh mangoes in processing facility",
      title: "Premium Mango Processing",
      description:
        "State-of-the-art facility for processing the finest mangoes into premium pulp and concentrates.",
    },
    {
      src: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Fruit pulp production line",
      title: "Advanced Production Line",
      description:
        "Modern machinery ensuring consistent quality and purity in every batch of fruit pulp.",
    },
    {
      src: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Quality control laboratory",
      title: "Quality Assurance Lab",
      description:
        "Rigorous testing and quality control to maintain international standards.",
    },
    {
      src: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Fresh tropical fruits",
      title: "Farm Fresh Ingredients",
      description:
        "Sourcing the finest tropical fruits directly from trusted farmers.",
    },
    {
      src: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Packaging facility",
      title: "Modern Packaging Unit",
      description:
        "Hygienic packaging processes ensuring product safety and freshness.",
    },
    {
      src: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Storage warehouse",
      title: "Temperature Controlled Storage",
      description:
        "Advanced storage facilities maintaining optimal conditions for product quality.",
    },
    {
      src: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Export ready products",
      title: "Export Quality Products",
      description:
        "Ready-to-ship products meeting international export standards.",
    },
    {
      src: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Team at work",
      title: "Dedicated Team",
      description:
        "Skilled professionals committed to delivering excellence in every process.",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="pt-8 pb-16 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a glimpse into our world-class facilities, processes, and the
            journey from orchard to finished product
          </p>
        </div>

        {/* Modern Slideshow Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-white">
            {/* Main Image */}
            <div className="relative w-full h-full">
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>

              {/* Content on Left Bottom */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-md">
                <div className="transform translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    {galleryImages[currentIndex].title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                    {galleryImages[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-green-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-green-600 h-1 rounded-full transition-all duration-2000 ease-linear"
                style={{
                  width: `${
                    ((currentIndex + 1) / galleryImages.length) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>

          {/* Thumbnail Strip - More compact for mobile */}
          <div className="mt-4 md:mt-6 flex justify-center gap-1 sm:gap-2 overflow-x-auto pb-2 px-2">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-green-500 scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
