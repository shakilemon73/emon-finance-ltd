import PageLayout from '../../components/common/PageLayout';
import { Link } from 'react-router-dom';

export default function Verticals() {
  return (
    <PageLayout 
      title="Top Converting Verticals" 
      subtitle="We specialize in these high-performing verticals with proven results."
      bgColor="bg-gradient-to-br from-purple-900 to-purple-700"
      textColor="text-white"
    >
      {/* ... rest of the Verticals page content ... */}
    </PageLayout>
  );
}