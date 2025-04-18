import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true); // loading state to delay render

  // Load auth user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("auth");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
    setLoading(false); // rendering allowed after checking localStorage
  }, []);

  // Keep localStorage in sync with state
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("auth", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("auth");
    }
  }, [authUser]);

  if (loading) return null; // Delay rendering until localStorage check is complete

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
