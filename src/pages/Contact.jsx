import { useState } from 'react';
import PageLayout from '../components/common/PageLayout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
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
      setSubmitStatus({ success: true, message: 'Thank you for your message! Our team will contact you within 24 hours.' });
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout 
      title="Contact Us" 
      subtitle="Get in touch with our team to discuss how we can help with your performance marketing needs."
      bgColor="bg-gradient-to-br from-blue-900 to-blue-700"
      textColor="text-white"
    >
      {/* ... rest of the Contact page content ... */}
    </PageLayout>
  );
}