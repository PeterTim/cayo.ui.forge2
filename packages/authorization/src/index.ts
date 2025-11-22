import { useState } from 'react';

export interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  const login = (username: string) => {
    setAuthState({
      isAuthenticated: true,
      user: username,
    });
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  };

  return { authState, login, logout };
};

export { default as AuthProvider, useAuthContext } from './AuthProvider';
