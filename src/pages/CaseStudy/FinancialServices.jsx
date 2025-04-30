import PageLayout from '../../components/common/PageLayout';
import { Link } from 'react-router-dom';

export default function CaseStudyDetail() {
  return (
    <PageLayout 
      title="Financial Services Brand 3X ROAS" 
      subtitle="How a leading fintech company scaled customer acquisition while maintaining profitability."
      bgColor="bg-gradient-to-br from-orange-900 to-orange-700"
      textColor="text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Financial Services Case Study" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                  Finance • 6-month campaign
                </span>
                <div className="flex items-center mb-2">
                  {[1,2,3,4,5].map((i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                  ))}
                  <span className="ml-1 text-sm text-gray-600">5.0 (24 reviews)</span>
                </div>
              </div>
              <Link 
                to="/case-study" 
                className="text-orange-600 hover:text-orange-800 font-medium inline-flex items-center"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to Case Studies
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-700 mb-1">ROAS Increase</p>
                <p className="text-2xl font-bold text-orange-800">3X</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-700 mb-1">CPA Reduction</p>
                <p className="text-2xl font-bold text-orange-800">45%</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-700 mb-1">Campaign Duration</p>
                <p className="text-2xl font-bold text-orange-800">6 Months</p>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3>Client Overview</h3>
              <p>
                Our client is a leading fintech company offering digital banking solutions to millennials and young 
                professionals. They came to us with the challenge of scaling their customer acquisition while 
                maintaining profitability in a highly competitive market.
              </p>
              
              {/* ... rest of the case study content ... */}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}