import { useAuth } from '../../contexts/AuthContext';

const LetterAvatar = ({ name }) => {
  const letter = name ? name.charAt(0).toUpperCase() : '?';
  
  return (
    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
      <span className="text-white text-lg font-medium">{letter}</span>
    </div>
  );
};

const Profile = ({ className = '' }) => {
  const { user, signInWithGoogle, signOut } = useAuth();

  if (!user) {
    return (
      <div className={`p-4 ${className}`}>
        <button
          onClick={signInWithGoogle}
          className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          <img 
            src="https://www.google.com/favicon.ico" 
            alt="Google" 
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    );
  }

  return (
    <div className={`p-4 ${className}`}>
      <div className="flex items-center gap-3">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <LetterAvatar name={user.displayName} />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-100 truncate">
            {user.displayName}
          </p>
          <p className="text-xs text-gray-400 truncate">
            {user.email}
          </p>
        </div>
        <button
          onClick={signOut}
          className="text-gray-400 hover:text-gray-100 transition-colors duration-200"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Profile; 