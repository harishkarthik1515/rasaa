import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/group", label: "Our Group" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200">
      <div className="flex justify-center w-full">
        <div className="flex justify-between items-center h-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src="/Rasaa.png"
                alt="Rasaa Foods"
                className="h-28 sm:h-32 md:h-36 lg:h-40 w-auto transition-transform duration-300 hover:scale-110 drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-gray-700 font-medium px-2 py-1 transition-colors duration-200 hover:text-green-600 ${
                  location.pathname === link.href ? "text-green-700" : ""
                }`}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-500 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition-all duration-200 border-2 border-green-600 hover:border-green-700"
            >
              Enquire Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full border border-gray-300 bg-white shadow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 text-green-700" />
            ) : (
              <Menu className="h-7 w-7 text-green-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <nav className="flex flex-col space-y-3 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-700 font-medium px-2 py-2 rounded transition-colors duration-200 hover:text-green-600 ${
                    location.pathname === link.href ? "bg-green-50 text-green-700" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition-all duration-200 text-center"
              >
                Enquire Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;