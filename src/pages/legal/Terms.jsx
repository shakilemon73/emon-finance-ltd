import PageLayout from '../../components/common/PageLayout';
import LegalPage from '../../components/common/LegalPage';

const content = `
  <p><strong>Last Updated:</strong> January 1, 2023</p>
  
  <h2>1. Acceptance of Terms</h2>
  <p>By accessing or using the services provided by Emon Finance Ltd Ltd. ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our services.</p>
  
  <!-- ... rest of the Terms content ... -->
`;

export default function Terms() {
  return <LegalPage title="Terms of Service" content={content} />;
}