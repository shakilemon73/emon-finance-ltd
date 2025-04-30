import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/common/PageLayout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setTimeout(() => {
      setIsLoading(false);
      setError('Invalid email or password. Please try again.');
    }, 1500);
  };

  return (
    <PageLayout 
      title="Login to Your Account" 
      subtitle="Access your dashboard to manage campaigns, track performance, and view reports."
      bgColor="bg-gradient-to-br from-blue-900 to-blue-700"
      textColor="text-white"
    >
      {/* ... rest of the Login page content ... */}
    </PageLayout>
  );
}