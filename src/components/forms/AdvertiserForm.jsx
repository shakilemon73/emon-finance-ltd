import { useState } from 'react';

export default function AdvertiserForm({ onClose, navigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    offerType: '',
    budget: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({ success: true, message: 'Thank you for your submission! Our team will contact you within 24 hours.' });
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        offerType: '',
        budget: '',
        goals: ''
      });
      
      setTimeout(() => {
        navigate('/thank-you');
      }, 3000);
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* ... rest of the AdvertiserForm component code ... */}
    </div>
  );
}