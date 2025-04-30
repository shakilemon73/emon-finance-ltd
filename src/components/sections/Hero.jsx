import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdvertiserForm from '../forms/AdvertiserForm';
import PublisherForm from '../forms/PublisherForm';

export default function Hero() {
  const [showAdvertiserForm, setShowAdvertiserForm] = useState(false);
  const [showPublisherForm, setShowPublisherForm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {showAdvertiserForm && <AdvertiserForm onClose={() => setShowAdvertiserForm(false)} navigate={navigate} />}
      {showPublisherForm && <PublisherForm onClose={() => setShowPublisherForm(false)} navigate={navigate} />}
      
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white pt-24 pb-20">
        {/* ... rest of the Hero component code ... */}
      </section>
    </>
  );
}