import { useParams } from 'react-router-dom';
import PageLayout from '../../components/common/PageLayout';
import { Link } from 'react-router-dom';

export default function VerticalDetail() {
  const { vertical } = useParams();
  
  const verticalData = {
    'finance': {
      title: "Finance Vertical",
      description: "Our finance vertical specializes in connecting advertisers with premium publishers in the financial services industry.",
      stats: [
        { label: "Average Conversion Rate", value: "6.8%" },
        { label: "Top Performing Offers", value: "Credit Cards, Personal Loans, Investment Platforms" },
        { label: "Average EPC", value: "$2.15" }
      ],
      content: `
        <h3>Why Finance?</h3>
        <p>The finance vertical offers some of the highest payouts in performance marketing due to the significant lifetime value of financial services customers. We've developed specialized expertise in this vertical, with:</p>
        <ul>
          <li>Premium publisher network focused on financial content</li>
          <li>Advanced fraud detection to ensure quality leads</li>
          <li>Optimized funnels for maximum conversion</li>
        </ul>
        
        <h3>Advertiser Benefits</h3>
        <p>Finance advertisers working with us benefit from:</p>
        <ul>
          <li>Access to high-intent traffic from financial publishers</li>
          <li>Advanced lead scoring to prioritize quality applications</li>
          <li>Compliance with financial regulations in all target markets</li>
        </ul>
        
        <h3>Publisher Benefits</h3>
        <p>Publishers in our finance network enjoy:</p>
        <ul>
          <li>Industry-leading payouts for financial conversions</li>
          <li>Exclusive offers not available on other networks</li>
          <li>Real-time reporting on conversion performance</li>
        </ul>
      `
    },
    // ... other vertical data
  }[vertical] || {
    title: "Finance Vertical",
    description: "The requested vertical does not exist or has been moved.",
    stats: [],
    content: "<p>Page not found</p>"
  };

  return (
    <PageLayout 
      title={verticalData.title} 
      subtitle={verticalData.description}
      bgColor="bg-gradient-to-br from-purple-900 to-purple-700"
      textColor="text-white"
    >
      {/* ... rest of the VerticalDetail page content ... */}
    </PageLayout>
  );
}