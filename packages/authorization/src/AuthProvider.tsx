import { useState, ReactNode } from 'react';
import { AuthContext } from './context';

interface AuthProviderProps {
  children: ReactNode; 
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string) => {
    setIsAuthenticated(true);
    setUser(username);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
