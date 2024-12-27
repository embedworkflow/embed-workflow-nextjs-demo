import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const UserNavigator = ({userId, children}) => {
  const [inputValue, setInputValue] = useState(userId || '');
  const router = useRouter()

  const handleNavigation = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue.length > 0) {
      router.push(`/users/${trimmedValue}/workflows/`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNavigation(e);
    }
  };

  return (
    <div className="flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:pr-3.5 lg:pl-8">
      <div className="flex flex-col justify-center items-start space-y-4 py-3">
        <div className="text-lg leading-6 text-white flex-1 font-semibold">Load demo for a user</div>

        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a User ID..."
            className="px-3 py-2 border rounded"
          />
          <button
            onClick={handleNavigation}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  )
};

export default UserNavigator;
