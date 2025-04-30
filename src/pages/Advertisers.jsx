import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/common/PageLayout';
import AdvertiserForm from '../components/forms/AdvertiserForm';

export default function Advertisers() {
  const [showAdvertiserForm, setShowAdvertiserForm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {showAdvertiserForm && <AdvertiserForm onClose={() => setShowAdvertiserForm(false)} navigate={navigate} />}
      
      <PageLayout 
        title="Advertiser Solutions" 
        subtitle="Scale your customer acquisition with our premium traffic sources and performance-based solutions."
        bgColor="bg-gradient-to-br from-blue-900 to-blue-700"
        textColor="text-white"
      >
        {/* ... rest of the Advertisers page content ... */}
      </PageLayout>
    </>
  );
}