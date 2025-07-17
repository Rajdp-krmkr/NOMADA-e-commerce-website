import React, { Children, createContext, useContext, useState } from "react";

export const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <UserContext.Provider value={{ isLoggedin, user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
