import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GalleryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { src: "/image1.png" },
    { src: "/image2.png" },
    { src: "/image3.png" },
    { src: "/image4.png" },
    { src: "/image5.png" },
    { src: "/image6.png" },
    { src: "/image7.png" },
    { src: "/image8.png" },
    { src: "/image9.png" },
    { src: "/image10.png" },
    { src: "/image11.png" },
    { src: "/image12.png" },
    { src: "/image13.png" },
    { src: "/image14.png" },
    { src: "/image15.png" },
    { src: "/image16.png" },
    { src: "/image17.png" },
    { src: "/image18.png" },
    { src: "/image19.png" },
    { src: "/image20.png" },
    { src: "/image21.png" },
    { src: "/image22.png" },
    { src: "/image23.png" },
    { src: "/image24.png" },
    { src: "/image25.png" },
    { src: "/image26.png" },
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
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={galleryImages[currentIndex].src}
                alt="Background Image"
                className="w-full h-full object-cover opacity-20" // Background image with reduced opacity
              />
            </div>

            {/* Main Image */}
            <div className="relative w-full h-full">
              <img
                src={galleryImages[currentIndex].src}
                alt="Gallery Image"
                className="w-full h-full object-contain transition-all duration-700 ease-in-out" // Main image
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
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
                  alt="Gallery Thumbnail"
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
