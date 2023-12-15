import React, { createContext, useState, useEffect, useContext } from "react";

// Define the shape of your context state
interface AuthContextState {
  isAuthenticated: boolean;
  user: any; // Replace 'any' with your User type
  login: (username: string, password: string) => void;
  logout: () => void;
  register: (username: string, password: string) => void;
}

// Initialize the context with a default value
export const AuthContext = createContext<AuthContextState | null>(null);

// Define the type for the AuthProvider props
interface AuthProviderProps {
  children: React.ReactNode;
}

// Create a provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null); // Replace 'any' with your User type

  // Mock login function
  const login = (username: string, password: string) => {
    // Implement your login logic here
    setIsAuthenticated(true);
    setUser({ username }); // Replace with actual user data
  };

  // Mock logout function
  const logout = () => {
    // Implement your logout logic here
    setIsAuthenticated(false);
    setUser(null);
  };

  // Mock register function
  const register = (username: string, password: string) => {
    // Implement your registration logic here
  };

  // Optionally check authentication status on mount
  useEffect(() => {
    // Check local storage or cookies for authentication token
    // and update state accordingly
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
