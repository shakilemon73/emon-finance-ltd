import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/common/PageLayout';
import PublisherForm from '../components/forms/PublisherForm';

export default function Publishers() {
  const [showPublisherForm, setShowPublisherForm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {showPublisherForm && <PublisherForm onClose={() => setShowPublisherForm(false)} navigate={navigate} />}
      
      <PageLayout 
        title="Publisher Network" 
        subtitle="Monetize your traffic with our high-converting offers and competitive payouts."
        bgColor="bg-gradient-to-br from-green-900 to-green-700"
        textColor="text-white"
      >
        {/* ... rest of the Publishers page content ... */}
      </PageLayout>
    </>
  );
}