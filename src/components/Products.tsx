import { ArrowRight, Droplets } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Totapuri Mango Pulp and Concentrate",
      image:
        "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Premium quality Totapuri mango pulp with natural sweetness and authentic taste",
    },
    {
      name: "Alphonso Mango Pulp",
      image:
        "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "King of mangoes - Alphonso pulp with rich flavor and golden color",
    },
    {
      name: "Sindura Mango Pulp",
      image:
        "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Traditional Sindura variety with unique taste profile and vibrant color",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Aseptic Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium fruit pulps and concentrates processed with cutting-edge
            aseptic technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300"></div>

                <div className="absolute top-4 right-4 animate-pulse">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <Droplets className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm opacity-90 mb-4">
                    {product.description}
                  </p>

                  <button className="flex items-center gap-2 text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            View All Products <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
