import PageLayout from '../components/common/PageLayout';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <PageLayout 
      title="Thank You!" 
      subtitle="Your submission has been received. Our team will contact you shortly."
      bgColor="bg-gradient-to-br from-green-900 to-green-700"
      textColor="text-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-check text-green-600 text-3xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Received</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in Emon Finance Ltd Ltd. Our team has received your application and will 
            review it shortly. We typically respond within 24 hours.
          </p>
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium text-green-800 mb-2">What Happens Next?</h3>
            <ul className="text-left text-green-700 text-sm space-y-1">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>Our team will review your application</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>We'll contact you to discuss partnership opportunities</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>Upon approval, you'll get access to our platform</span>
              </li>
            </ul>
          </div>
          <Link 
            to="/" 
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-3 rounded-md font-semibold hover:shadow-md transition-all duration-200 hover-scale"
          >
            Back to Home <i className="fas fa-home ml-2"></i>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}