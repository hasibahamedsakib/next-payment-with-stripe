'use client';
import { createContext, useContext, useState } from 'react';

// Create the UserDataContext
const UserDataContext = createContext();

// Custom hook to use the UserDataContext
export const useUserDataContext = () => useContext(UserDataContext);

// Create a provider component
export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null); // Initially, the user data is null

  // Function to update user data after fetching
  const updateUserData = (data) => {
    setUserData(data);
  };

  return (
    <UserDataContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
