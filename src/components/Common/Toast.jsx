const Toast = ({ message, type = 'error' }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <div className={`
        px-4 py-2 rounded-lg shadow-lg
        ${type === 'error' ? 'bg-red-500' : 'bg-green-500'} 
        text-white text-sm font-medium
      `}>
        {message}
      </div>
    </div>
  );
};

export default Toast; 