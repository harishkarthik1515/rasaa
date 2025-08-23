import GroupCompanies from "../components/GroupCompanies";

const GroupPage = () => {
  const companies = [
    {
      name: "DY Poultry Farms",
      description: "Leading poultry farming operations with modern facilities and sustainable practices.",
      image: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Established poultry operations focusing on quality breeding and sustainable farming practices."
    },
    {
      name: "Dhiraj Agro Pvt Ltd",
      description: "Agricultural solutions and farming equipment for modern agriculture.",
      image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Comprehensive agricultural services including equipment supply and farming consultancy."
    },
    {
      name: "SSR Agro Energy",
      description: "Renewable energy solutions for agricultural and industrial applications.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Solar and renewable energy solutions tailored for agricultural and industrial needs."
    },
    {
      name: "Ispeed Motors",
      description: "Automotive solutions and vehicle services for commercial applications.",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Commercial vehicle solutions and automotive services for business applications."
    },
    {
      name: "Katur Farm Fresh",
      description: "Fresh produce and farm-to-table solutions for quality food products.",
      image: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Direct farm sourcing and fresh produce distribution with quality assurance."
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-green-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Group Companies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diversified business portfolio spanning agriculture, energy, automotive, and food sectors.
          </p>
        </div>
      </div>

      <GroupCompanies />

      {/* Detailed Company Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {companies.map((company, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{company.name}</h2>
                  <p className="text-xl text-gray-600 mb-6">{company.description}</p>
                  <p className="text-gray-700 mb-6">{company.details}</p>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroupPage;