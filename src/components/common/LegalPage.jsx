import PageLayout from './PageLayout';

export default function LegalPage({ title, content }) {
  return (
    <PageLayout 
      title={title} 
      bgColor="bg-gradient-to-br from-gray-900 to-gray-700"
      textColor="text-white"
    >
      <div className="prose mx-auto" dangerouslySetInnerHTML={{ __html: content }} />
    </PageLayout>
  );
}