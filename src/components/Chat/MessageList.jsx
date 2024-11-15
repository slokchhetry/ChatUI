import MessageItem from './MessageItem';

const MessageList = ({ messages }) => {
  return (
    <div className="space-y-4">
      {messages && messages.map((message) => (
        <MessageItem 
          key={message._id || `${message.sender}-${message.timestamp}`} 
          message={message} 
        />
      ))}
    </div>
  );
};

export default MessageList;