export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm hover-scale feature-card ${className}`}>
      {children}
    </div>
  );
}