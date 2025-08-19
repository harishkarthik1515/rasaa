import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = ["Home", "About us", "Our group", "Gallery", "Contact"];

  const products = [
    "Aseptic Totapuri mango",
    "Aseptic Alphonso mango",
    "Aseptic Sindura mango",
    "Aseptic Neelam mango",
    "Totapuri mango concentrate",
    "Green mango pulp",
    "White guava puree",
    "White Guava concentrate",
    "Red Papaya puree",
    "Red Papaya concentrate",
    "Tomato paste",
  ];

  const groupCompanies = [
    "DY Poultry Farms",
    "Dhiraj Agro Pvt Ltd",
    "SSR Agro Energy",
    "Ispeed Motors",
    "Katur Farm Fresh",
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/Rasaa.png"
                alt="Rasaa Foods"
                className="h-32 sm:h-36 md:h-40 lg:h-48 w-auto transition-transform duration-300 hover:scale-110 filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              From Indian farms to international shelves, delivering pure fruit
              puree and concentrates since 2003.
            </p>
            <p className="text-green-400 font-semibold italic">
              "Feel the Fruit. Feel Rasaa"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              Our Products
            </h3>
            <ul className="space-y-2 text-sm">
              {products.slice(0, 8).map((product, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-semibold">Head Office:</p>
                  <p>
                    #171, 1st Floor, MTH Road, Villivakkam, Chennai-600049,
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <a
                  href="tel:+919986630246"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  +91 9986630246
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <a
                  href="mailto:office@rasaafoods.com"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  office@rasaafoods.com
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold mb-2 text-green-400">
                Our Group Companies
              </h4>
              <ul className="text-sm space-y-1">
                {groupCompanies.map((company, index) => (
                  <li key={index} className="text-gray-300">
                    {company}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Rasaa Foods. All rights reserved. | Delivering quality since
            2003
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
