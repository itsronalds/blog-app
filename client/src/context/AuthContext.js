import { createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const value = {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
