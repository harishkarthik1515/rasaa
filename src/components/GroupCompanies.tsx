import { Building2, Truck, Zap, Car, Leaf } from "lucide-react";

const GroupCompanies = () => {
  const companies = [
    { name: "DY Poultry Farms", icon: Building2 },
    { name: "Dhiraj Agro Pvt Ltd", icon: Leaf },
    { name: "SSR Agro Energy", icon: Zap },
    { name: "Ispeed Motors", icon: Car },
    { name: "Katur Farm Fresh", icon: Truck },
  ];

  return (
    <section id="group" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Group of Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diversified business portfolio spanning agriculture, energy, and
            automotive sectors
          </p>
        </div>

        {/* Horizontal rolling carousel with infinite scroll and darker, bigger cards */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div
              className="flex space-x-8 animate-scroll-x"
              style={{ minWidth: "1800px" }}
            >
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:rotate-1 group min-w-[220px] max-w-xs flex-shrink-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-green-100 group-hover:bg-green-200 p-4 rounded-full transition-all duration-300 group-hover:scale-110 animate-pulse">
                      <company.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-green-600 transition-colors duration-300">
                      {company.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Add keyframes for rolling animation */}
        <style>{`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            animation: scroll-x 18s linear infinite;
          }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </section>
  );
};

export default GroupCompanies;
