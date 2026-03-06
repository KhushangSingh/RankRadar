import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// Point axios at the deployed API in production; empty string lets Vite proxy work in dev
axios.defaults.baseURL = import.meta.env.VITE_API_URL || '';

const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const saveSession = (token) => {
  localStorage.setItem('token', token);
  localStorage.setItem('loginTimestamp', Date.now().toString());
};

const clearSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('loginTimestamp');
  delete axios.defaults.headers.common['Authorization'];
};

const isSessionValid = () => {
  const token = localStorage.getItem('token');
  const timestamp = localStorage.getItem('loginTimestamp');
  if (!token || !timestamp) return false;
  return (Date.now() - Number(timestamp)) < SESSION_DURATION_MS;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    // On cold load, immediately discard if session is expired
    if (!isSessionValid()) {
      clearSession();
      return null;
    }
    return localStorage.getItem('token');
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await fetchUser();
      } else {
        setUser(null);
        setLoading(false);
      }
    };
    initAuth();
  }, [token]);

  const fetchUser = async () => {
    try {
      const res = await axios.get('/api/users/me');
      setUser(res.data);
    } catch (error) {
      console.error('Error fetching user', error);
      clearSession();
      setToken(null);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    const res = await axios.post('/api/users/login', { email, password });
    saveSession(res.data.token);
    setToken(res.data.token);
    setUser(res.data);
    setLoading(false);
    return res.data;
  };

  const register = async (userData) => {
    const res = await axios.post('/api/users', userData);
    saveSession(res.data.token);
    setToken(res.data.token);
    setUser(res.data);
    setLoading(false);
    return res.data;
  };

  const logout = () => {
    clearSession();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
