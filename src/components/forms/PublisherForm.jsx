import { useState } from 'react';

export default function PublisherForm({ onClose, navigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    trafficType: '',
    monthlyTraffic: '',
    monetization: ''
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
      setSubmitStatus({ success: true, message: 'Thank you for your submission! Our publisher team will contact you within 24 hours.' });
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        trafficType: '',
        monthlyTraffic: '',
        monetization: ''
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
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto form-transition">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Publisher Application</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close form"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          {submitStatus ? (
            <div className={`p-4 rounded-lg mb-6 ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <div className="flex items-center">
                <i className={`fas ${submitStatus.success ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2`}></i>
                <span>{submitStatus.message}</span>
              </div>
              {submitStatus.success && (
                <div className="mt-4">
                  <p className="text-sm">You'll be redirected shortly...</p>
                </div>
              )}
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6">
                Please fill out this form to join our premium publisher network. Our team will review your 
                application and contact you within 24 hours to discuss partnership opportunities.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* ... rest of the PublisherForm content ... */}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}