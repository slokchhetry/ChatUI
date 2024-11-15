import { useAuth } from '../../contexts/AuthContext';

const MessageItem = ({ message }) => {
  const { user } = useAuth();
  const isUser = user && message.sender === user.uid;
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <img 
          src={message.senderPhoto} 
          alt={message.senderName}
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      <div className={`
        relative 
        max-w-[70%] 
        px-4 
        py-2.5
        ${isUser 
          ? 'bg-secondary text-white rounded-[22px] rounded-br-[8px]' 
          : 'bg-dark-lighter text-gray-100 rounded-[22px] rounded-bl-[8px]'
        }
        shadow-lg
        ${isUser
          ? 'shadow-secondary/20'
          : 'shadow-dark-lighter/20'
        }
      `}>
        {!isUser && (
          <div className="text-xs text-gray-400 mb-1">
            {message.senderName}
          </div>
        )}
        <p className="text-sm leading-relaxed">{message.text}</p>
        <div className={`text-[10px] mt-1 ${
          isUser ? 'text-gray-200' : 'text-gray-400'
        }`}>
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;