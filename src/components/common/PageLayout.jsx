export default function PageLayout({ children, title, subtitle, bgColor = 'bg-white', textColor = 'text-dark-900' }) {
  return (
    <>
      <div className={`${bgColor} ${textColor} pt-24 pb-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && <p className="text-xl opacity-90 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </>
  );
}