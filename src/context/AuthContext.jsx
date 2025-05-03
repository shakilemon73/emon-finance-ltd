import { createContext, useState, useContext } from 'react';
import { createHash } from 'crypto';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

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
      // Hash the password before sending
      const hashedPassword = createHash('sha256')
        .update(credentials.password)
        .digest('hex');

      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: hashedPassword
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      
      // Store token and user data securely
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      setUser(data.user);
      setIsAuthenticated(true);

      // Redirect to dashboard or home
      navigate('/dashboard');

      return true;
    } catch (error) {
      throw new Error(error.message || 'Failed to login');
    }
  };

  const logout = () => {
    // Clear all authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    
    // Redirect to login
    navigate('/login');
  };

  // Check authentication status on mount
  const checkAuth = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
          setIsAuthenticated(true);
        } else {
          logout();
        }
      } catch (error) {
        logout();
      }
    }
  };

  // Run auth check when component mounts
  checkAuth();

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}