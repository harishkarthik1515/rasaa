// no external icons needed for this layout

const ProductsPage = () => {
  const products = [
    {
      name: "Aseptic Totapuri Mango",
      image:
        "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Premium quality aseptic Totapuri mango pulp with natural sweetness and authentic taste",
    },
    {
      name: "Aseptic Alphonso Mango",
      image:
        "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "King of mangoes - Aseptic Alphonso pulp with rich flavor and golden color",
    },
    {
      name: "Aseptic Sindura Mango",
      image:
        "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Traditional aseptic Sindura variety with unique taste profile and vibrant color",
    },
    {
      name: "Aseptic Neelam Mango",
      image:
        "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Sweet and aromatic aseptic Neelam mango variety perfect for juices and desserts",
    },
    {
      name: "Totapuri Mango Concentrate",
      image:
        "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Concentrated Totapuri mango with enhanced flavor intensity for industrial applications",
    },
    {
      name: "Green Mango Pulp",
      image:
        "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Tangy green mango pulp ideal for chutneys, pickles and savory applications",
    },
    {
      name: "White Guava Puree",
      image:
        "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Smooth white guava puree with balanced sweetness and characteristic aroma",
    },
    {
      name: "White Guava Concentrate",
      image:
        "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Concentrated white guava with intensified flavor for beverage applications",
    },
    {
      name: "Red Papaya Puree",
      image:
        "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Vibrant red papaya puree rich in nutrients and natural sweetness",
    },
    {
      name: "Red Papaya Concentrate",
      image:
        "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Concentrated red papaya with enhanced nutritional value and flavor",
    },
    {
      name: "Tomato Paste",
      image:
        "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Concentrated tomato paste with deep flavor and rich color for culinary applications",
    },
  ];

  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium fruit pulps and concentrates processed with cutting-edge
            aseptic technology for global food and beverage applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Tall panel */}
              <div className="relative h-72 md:h-96 lg:h-[420px] perspective-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 transform-gpu will-change-transform group-hover:translate-y-0 group-hover:scale-105 group-hover:rotate-1"
                  style={{ transformOrigin: "center" }}
                />

                {/* dark overlay to match reference */}
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/60 transition-colors duration-300"></div>

                {/* centered content with icon above name */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <img
                    src="/drink.png"
                    alt="icon"
                    className="mb-3 w-10 h-10 object-contain filter brightness-0 invert opacity-90"
                  />

                  <h3 className="text-xl md:text-2xl lg:text-2xl text-white font-bold tracking-wide mb-3">
                    {product.name}
                  </h3>

                  <div className="w-10 h-0.5 bg-white/90 mb-4" />

                  <div className="text-xs text-white/90 max-w-xs opacity-90 hidden md:block">
                    {product.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
