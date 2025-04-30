import PageLayout from '../../components/common/PageLayout';
import { Link } from 'react-router-dom';

export default function PerformanceMarketingGuide() {
  return (
    <PageLayout 
      title="Performance Marketing Guide" 
      subtitle="Learn the fundamentals of performance marketing and how to optimize your campaigns."
      bgColor="bg-gradient-to-br from-indigo-900 to-indigo-700"
      textColor="text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                  Advertisers
                </span>
                <h2 className="text-2xl font-bold text-gray-900">Performance Marketing Guide</h2>
                <p className="text-gray-600">15 min read • PDF Guide</p>
              </div>
              <Link 
                to="/resources" 
                className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to Resources
              </Link>
            </div>
            
            <div className="pdf-container mb-6">
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <i className="fas fa-file-pdf text-6xl text-red-500 mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Performance Marketing Guide</h3>
                  <p className="text-gray-600 mb-4">This would be an embedded PDF viewer in a production environment</p>
                  <button
                    className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-6 py-2 rounded-md font-medium hover:shadow-md transition-all duration-200"
                    onClick={() => alert('Downloading Performance Marketing Guide PDF...')}
                  >
                    <i className="fas fa-download mr-2"></i> Download PDF
                  </button>
                </div>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3>Table of Contents</h3>
              <ul>
                <li>Introduction to Performance Marketing</li>
                <li>Key Performance Metrics</li>
                <li>Campaign Optimization Strategies</li>
                <li>Audience Targeting Techniques</li>
                <li>Creative Best Practices</li>
                <li>Fraud Prevention</li>
                <li>Scaling Successful Campaigns</li>
              </ul>
              
              <h3>About This Guide</h3>
              <p>
                This comprehensive guide covers all aspects of performance marketing, from basic concepts to advanced 
                optimization techniques. Whether you're new to performance marketing or looking to refine your 
                strategies, this guide provides actionable insights to improve your campaign results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}