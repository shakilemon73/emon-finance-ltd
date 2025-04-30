import PageLayout from '../../components/common/PageLayout';
import LegalPage from '../../components/common/LegalPage';

const content = `
  <p><strong>Last Updated:</strong> January 1, 2023</p>
  
  <h2>1. Introduction</h2>
  <p>Emon Finance Ltd Ltd. ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our performance marketing network services.</p>
  
  <!-- ... rest of the Privacy Policy content ... -->
`;

export default function Privacy() {
  return <LegalPage title="Privacy Policy" content={content} />;
}