import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/group-companies", label: "Group Companies" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  // Update the active state when location changes
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200">
      <div className="flex justify-center w-full">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20 w-full max-w-7xl px-2 sm:px-6 lg:px-8 rounded-none">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src="/Rasaa.png"
                alt="Rasaa Foods"
                className="h-20 sm:h-24 md:h-28 w-auto transition-transform duration-300 hover:scale-105 drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setActive(link.to)}
                className={`relative text-gray-700 font-medium px-2 py-1 transition-colors duration-200 hover:text-green-600 ${
                  active === link.to ? "text-green-700" : ""
                }`}
              >
                {link.label}
                {active === link.to && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-500 rounded-full animate-[slideIn_0.3s]" />
                )}
              </Link>
            ))}
            <a
              href="#enquire"
              className="ml-4 bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition-all duration-200 border-2 border-green-600 hover:border-green-700"
            >
              Enquire Now
            </a>
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
          <div className="md:hidden absolute top-20 left-0 right-0 py-4 border-t border-gray-200 bg-white rounded-b-2xl shadow-lg">
            <nav className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => {
                    setActive(link.to);
                    setIsMenuOpen(false);
                  }}
                  className={`text-gray-700 font-medium px-2 py-2 rounded transition-colors duration-200 hover:text-green-600 ${
                    active === link.to ? "bg-green-50 text-green-700" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#enquire"
                className="mt-2 bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition-all duration-200 border-2 border-green-600 hover:border-green-700 text-center"
              >
                Enquire Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
