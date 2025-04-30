import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/common/PageLayout';

export default function Signup() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '', 
    website: '',
    role: 'Publisher',
    message: '',
    consent: false 
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setStatus({ type: 'error', message: 'Please agree to our terms and privacy policy.' });
      return;
    }
    setStatus({ type: 'loading', message: 'Processing your application...' });
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/shakil@emonfinanceltd.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          website: formData.website,
          role: formData.role,
          message: formData.message,
          _subject: "New Sign Up Submission - Emon Finance Ltd",
          _template: "table"
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus({ type: 'success', message: 'Thank you for signing up! Our team will contact you within 24 hours.' });
        setFormData({ 
          name: '', 
          email: '', 
          company: '', 
          website: '',
          role: 'Publisher',
          message: '',
          consent: false 
        });
      } else {
        setStatus({ type: 'error', message: 'Submission failed. Please try again or contact us directly.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    }
  };

  return (
    <PageLayout 
      title="Create Your Account" 
      subtitle="Join our network of premium advertisers and publishers."
      bgColor="bg-gradient-to-br from-blue-900 to-blue-700"
      textColor="text-white"
    >
      {/* ... rest of the Signup page content ... */}
    </PageLayout>
  );
}