import { useAuth } from '../../contexts/AuthContext';

const LetterAvatar = ({ name }) => {
  const letter = name ? name.charAt(0).toUpperCase() : '?';
  
  return (
    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
      <span className="text-white text-sm font-medium">{letter}</span>
    </div>
  );
};

const Header = ({ toggleSidebar }) => {
  const { user } = useAuth();

  return (
    <div className="lg:hidden flex items-center justify-between p-4 bg-dark-lighter border-b border-gray-700">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-gray-100 mr-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-100">SpeakVerse</h1>
      </div>
      {user && (
        <div className="lg:hidden">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <LetterAvatar name={user.displayName} />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;