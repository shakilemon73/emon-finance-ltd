import { Link } from 'react-router-dom';

export default function Footer({ currentPage, navigate }) {
  const navItems = ['Advertisers', 'Publishers', 'Verticals', 'Resources', 'Case Study', 'About'];
  const legalItems = ['Terms', 'Privacy', 'Cookies'];

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://media.licdn.com/dms/image/v2/D560BAQGS4tCTdvEdGw/company-logo_100_100/B56ZZJf6fAHsAU-/0/1744989825409?e=1750291200&v=beta&t=Fi_TOPK-UtNdgjDNMtQzccX63GY3mY5_34v_bReHLjY" 
                alt="Emon Finance Ltd Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-primary-400">Emon Finance Ltd</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium performance marketing network connecting advertisers with top publishers worldwide.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/searcharbitrage12" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/emonfinanceltd" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/emonfinanceltd" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/emonfinanceltd" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => {
                const path = item.toLowerCase().replace(' ', '-');
                return (
                  <li key={item}>
                    <Link 
                      to={`/${path}`} 
                      className={`text-gray-400 hover:text-white text-sm transition-colors duration-200 ${currentPage === path ? 'text-white font-medium' : ''}`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalItems.map((item) => {
                const path = item.toLowerCase();
                return (
                  <li key={item}>
                    <Link 
                      to={`/${path}`} 
                      className={`text-gray-400 hover:text-white text-sm transition-colors duration-200 ${currentPage === path ? 'text-white font-medium' : ''}`}
                    >
                      {item === 'Cookies' ? 'Cookie Policy' : `${item} of Service`}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-primary-400"></i>
                <span>support@emonfinanceltd.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2 text-primary-400"></i>
                <span>+880-1518789028</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-primary-400"></i>
                <span>23 Riverstone Bridge, Littleborough, OL15 8JF, UK and Ulipur, Bangladesh, 5620</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Emon Finance Ltd Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}