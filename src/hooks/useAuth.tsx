// hooks/useAuth.tsx
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/AuthContext";

// This hook simplifies the process of accessing the auth context in a type-safe manner
const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default useAuth;
