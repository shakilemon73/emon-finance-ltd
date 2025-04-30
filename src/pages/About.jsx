import PageLayout from '../components/common/PageLayout';

export default function About() {
  return (
    <PageLayout 
      title="About Emon Finance Ltd" 
      subtitle="Our mission, values, and the team behind your performance marketing success."
      bgColor="bg-gradient-to-br from-cyan-900 to-cyan-700"
      textColor="text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">
            Founded in 2018, Emon Finance Ltd began with a simple idea: to create a performance marketing network that 
            prioritizes transparency, quality, and results for both advertisers and publishers.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            What started as a small team of digital marketing veterans has grown into a global platform connecting 
            thousands of advertisers with premium publishers across all verticals.
          </p>
          <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100">
            <h3 className="text-xl font-semibold mb-3 text-cyan-800">Our Mission</h3>
            <p className="text-cyan-700">
              "To empower businesses and publishers through performance-based marketing solutions that drive 
              measurable results and sustainable growth."
            </p>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl border border-cyan-100">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Emon Finance Ltd team" 
              className="rounded-lg shadow-md w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ... rest of the About page content ... */}
    </PageLayout>
  );
}