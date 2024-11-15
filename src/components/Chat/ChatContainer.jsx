import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import Toast from '../Common/Toast';

const API_URL = 'http://localhost:3000/api';

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [toast, setToast] = useState(null);
  const { user } = useAuth();

  const showToast = (message, type = 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000); // Hide after 3 seconds
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${API_URL}/messages`);
      if (!response.ok) throw new Error('Failed to fetch messages');
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError('Failed to load messages');
    }
  };

  useEffect(() => {
    fetchMessages();
    // Set up polling or WebSocket here if needed
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = async (text) => {
    if (!user) {
      showToast('Please sign in to send messages');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          sender: user.uid,
          senderName: user.displayName,
          senderPhoto: user.photoURL || '',
          room: 'general'
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      const newMessage = await response.json();
      setMessages(prev => [...prev, newMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
      showToast('Failed to send message');
    }
  };

  return (
    <div className="flex flex-col h-full relative">
      <div className="flex-1 custom-scrollbar p-4 pb-[76px]">
        <MessageList messages={messages} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 lg:relative bg-dark p-4 border-t border-gray-700">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};

export default ChatContainer;