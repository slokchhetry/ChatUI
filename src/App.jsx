import { useState } from 'react';
import ChatContainer from './components/Chat/ChatContainer';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col h-screen bg-dark">
      {/* Header is fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-30 lg:hidden">
        <Header toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex flex-1 h-full lg:h-screen pt-[65px] lg:pt-0">
        <Sidebar isOpen={isSidebarOpen} />
        
        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
        
        <div className="flex-1">
          <ChatContainer />
        </div>
      </div>
    </div>
  );
}

export default App;