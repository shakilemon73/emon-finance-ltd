export default function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100K+", label: "Daily Impressions", icon: "fa-eye", color: "from-blue-500 to-blue-600" },
            { value: "500+", label: "Active Campaigns", icon: "fa-bullseye", color: "from-purple-500 to-purple-600" },
            { value: "95%", label: "Uptime Guarantee", icon: "fa-shield-alt", color: "from-green-500 to-green-600" },
            { value: "24/7", label: "Support", icon: "fa-headset", color: "from-orange-500 to-orange-600" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br p-0.5 rounded-lg hover-scale"
            >
              <div className="bg-white p-6 rounded-lg text-center h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white`}>
                  <i className={`fas ${stat.icon} text-xl`}></i>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}