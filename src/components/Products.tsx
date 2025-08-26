import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-100 shadow-md cursor-pointer"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 transform-gpu will-change-transform group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <img
                    src="/drink.png"
                    alt="icon"
                    className="mb-2 w-8 h-8 object-contain filter brightness-0 invert opacity-90"
                  />

                  <h3 className="text-lg md:text-xl text-white font-bold tracking-wide mb-2">
                    {product.name}
                  </h3>

                  <div className="w-8 h-0.5 bg-white/90 mb-3" />

                  <div className="text-xs text-white/90 max-w-xs opacity-90 hidden md:block">
                    {product.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 items-center gap-2"
          >
            View All Products <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
