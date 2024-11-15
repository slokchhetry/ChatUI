import Profile from '../Profile/Profile';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`
      fixed lg:static inset-y-0 left-0 
      transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 transition-transform duration-200 ease-in-out
      w-64 bg-dark-lighter h-screen border-r border-gray-700
      z-30 flex flex-col
    `}>
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold text-gray-100">SpeakVerse</h1>
      </div>
      <Profile className="border-b border-gray-700" />
      <div className="flex-1 overflow-y-auto">
        {/* Chat rooms will go here */}
      </div>
    </div>
  );
};

export default Sidebar;