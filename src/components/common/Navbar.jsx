import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ currentPage, navigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Advertisers', 'Publishers', 'Verticals', 'Resources', 'Case Study', 'About'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://media.licdn.com/dms/image/v2/D560BAQGS4tCTdvEdGw/company-logo_100_100/B56ZZJf6fAHsAU-/0/1744989825409?e=1750291200&v=beta&t=Fi_TOPK-UtNdgjDNMtQzccX63GY3mY5_34v_bReHLjY" 
                alt="Emon Finance Ltd Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold gradient-text bg-gradient-to-r from-primary-600 to-primary-800">
                Emon Finance Ltd
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {navItems.map((item) => {
              const path = item.toLowerCase().replace(' ', '-');
              return (
                <Link
                  key={item}
                  to={`/${path}`}
                  className={`nav-link px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentPage === path ? 'text-primary-600 font-semibold active' : 'text-dark-900 hover:text-primary-600'
                  }`}
                >
                  {item}
                </Link>
              );
            })}
            <div className="flex space-x-4 ml-8">
              <Link 
                to="/login" 
                className="text-dark-900 hover:text-primary-600 px-3 py-2 text-sm font-medium"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-gradient-to-r from-primary-600 to-primary-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-md transition-all duration-200 hover:opacity-90"
                aria-label="Sign up"
              >
                Sign Up
              </Link>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dark-900 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-2"
              aria-label="Toggle navigation menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const path = item.toLowerCase().replace(' ', '-');
              return (
                <Link
                  key={item}
                  to={`/${path}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium ${
                    currentPage === path ? 'text-primary-600 bg-gray-50' : 'text-dark-900 hover:text-primary-600 hover:bg-gray-50'
                  } rounded-md`}
                >
                  {item}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-gray-200">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-2 text-base font-medium text-center text-primary-600 hover:bg-gray-50 rounded-md"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full mt-2 px-4 py-2 text-base font-medium text-center text-white bg-gradient-to-r from-primary-600 to-primary-800 rounded-md hover:shadow-md hover:opacity-90"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}