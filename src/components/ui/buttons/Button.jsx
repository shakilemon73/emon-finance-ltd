export default function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  className = '',
  disabled = false
}) {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-800 text-white',
    secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-800 text-white',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-medium hover:shadow-md transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}