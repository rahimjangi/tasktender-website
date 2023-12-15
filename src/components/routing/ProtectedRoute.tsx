// components/routing/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth"; // Adjust the import path as needed
import { AuthContextState } from "../../types/authTypes"; // Adjust the import path

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth() as AuthContextState; // Use AuthContextState type
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to the login page and remember the current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Return the element (component) to render if authenticated
  return <>{element}</>;
};

export default ProtectedRoute;
