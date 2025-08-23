import Products from "../components/Products";

const ProductsPage = () => {
  const allProducts = [
    {
      name: "Totapuri Mango Pulp and Concentrate",
      image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premium quality Totapuri mango pulp with natural sweetness and authentic taste",
      details: "Available in aseptic packaging with 12-month shelf life. Perfect for beverages, ice creams, and food processing."
    },
    {
      name: "Alphonso Mango Pulp",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "King of mangoes - Alphonso pulp with rich flavor and golden color",
      details: "Premium grade Alphonso variety known for its distinctive taste and aroma. Ideal for premium food applications."
    },
    {
      name: "Sindura Mango Pulp",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Traditional Sindura variety with unique taste profile and vibrant color",
      details: "Regional specialty with excellent color retention and balanced sweetness. Perfect for traditional recipes."
    },
    {
      name: "Neelam Mango Pulp",
      image: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Aromatic Neelam variety with distinctive flavor profile",
      details: "Known for its unique aroma and smooth texture. Excellent for premium beverage applications."
    },
    {
      name: "White Guava Puree",
      image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Pure white guava puree with natural sweetness",
      details: "High vitamin C content with natural antioxidants. Perfect for health drinks and baby food."
    },
    {
      name: "Red Papaya Puree",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Rich red papaya puree with vibrant color and nutrition",
      details: "High in beta-carotene and enzymes. Ideal for health beverages and cosmetic applications."
    },
    {
      name: "Tomato Paste",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Concentrated tomato paste for industrial applications",
      details: "Available in various concentrations. Perfect for sauce manufacturing and food processing."
    },
    {
      name: "Green Mango Pulp",
      image: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Tangy green mango pulp for specialty applications",
      details: "Unique sour taste profile. Excellent for pickles, chutneys, and traditional preparations."
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-green-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of premium fruit pulps and concentrates, processed with cutting-edge technology.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{product.details}</p>
                  
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;