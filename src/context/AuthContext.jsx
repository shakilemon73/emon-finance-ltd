import { createContext, useState, useContext } from 'react';
import { createHash } from 'crypto';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../utils/api';

const AuthContext = createContext();

export const AuthError = class extends Error {
  constructor(message, status = 401) {
    super(message);
    this.status = status;
    this.name = 'AuthError';
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem('authToken');
    return !!token;
  });
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      if (!credentials.email || !credentials.password) {
        throw new AuthError('Email and password are required', 400);
      }

      // Hash the password before sending
      const hashedPassword = createHash('sha256')
        .update(credentials.password)
        .digest('hex');

      const response = await apiRequest('/auth/login', 'POST', {
        email: credentials.email,
        password: hashedPassword
      });

      // Store token and user data securely
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));

      setUser(response.user);
      setIsAuthenticated(true);

      // Redirect to dashboard or home
      navigate('/dashboard');

      return true;
    } catch (error) {
      throw error instanceof AuthError ? error : new AuthError('Login failed', 401);
    }
  };

  const logout = () => {
    try {
      // Clear all authentication data
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      setUser(null);
      setIsAuthenticated(false);
      
      // Redirect to login
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Check authentication status on mount
  const checkAuth = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const response = await apiRequest('/auth/verify', 'GET');
        setUser(response.user);
        setIsAuthenticated(true);
      } catch (error) {
        logout();
      }
    }
  };

  // Run auth check when component mounts
  checkAuth();

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      login, 
      logout,
      checkAuth
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}