import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;