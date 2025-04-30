import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Advertisers from './pages/Advertisers';
import Publishers from './pages/Publishers';
import Verticals from './pages/Verticals';
import VerticalDetail from './pages/Verticals/[vertical]';
import Resources from './pages/Resources';
import PerformanceMarketingGuide from './pages/Resources/PerformanceMarketingGuide';
import CaseStudy from './pages/CaseStudy';
import CaseStudyDetail from './pages/CaseStudy/FinancialServices';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ThankYou from './pages/ThankYou';
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';
import Cookies from './pages/legal/Cookies';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = location.pathname.substring(1) || 'home';
    setCurrentPage(path);
  }, [location]);

  return (
    <AuthProvider>
      <Navbar currentPage={currentPage} navigate={navigate} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advertisers" element={<Advertisers />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/verticals" element={<Verticals />} />
        <Route path="/verticals/:vertical" element={<VerticalDetail />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/performance-marketing-guide" element={<PerformanceMarketingGuide />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/case-study/financial-services" element={<CaseStudyDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer currentPage={currentPage} navigate={navigate} />
    </AuthProvider>
  );
}