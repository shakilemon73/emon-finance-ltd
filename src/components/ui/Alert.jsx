export default function Alert({ type = 'info', message }) {
    const alertTypes = {
      success: {
        bg: 'bg-green-50',
        text: 'text-green-800',
        border: 'border-green-200',
        icon: 'fa-check-circle'
      },
      error: {
        bg: 'bg-red-50',
        text: 'text-red-800',
        border: 'border-red-200',
        icon: 'fa-exclamation-circle'
      },
      info: {
        bg: 'bg-blue-50',
        text: 'text-blue-800',
        border: 'border-blue-200',
        icon: 'fa-info-circle'
      },
      warning: {
        bg: 'bg-yellow-50',
        text: 'text-yellow-800',
        border: 'border-yellow-200',
        icon: 'fa-exclamation-triangle'
      }
    };
  
    return (
      <div className={`${alertTypes[type].bg} ${alertTypes[type].text} border-l-4 ${alertTypes[type].border} p-4 mb-4`}>
        <div className="flex">
          <div className="flex-shrink-0">
            <i className={`fas ${alertTypes[type].icon} text-xl`}></i>
          </div>
          <div className="ml-3">
            <p className="text-sm">{message}</p>
          </div>
        </div>
      </div>
    );
  }