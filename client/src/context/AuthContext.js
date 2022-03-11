import { createContext, useContext, useState, useEffect } from 'react';
import axios from '../utils/axios';

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const sessionVerify = async () => {
    try {
      const request = await axios.get('/auth');
      const { success, auth } = request.data;

      if (!success) {
        // No access
        return;
      }

      if (success) {
        setIsAuth(auth);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => sessionVerify(), []);

  const value = {
    isAuth,
    setIsAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
