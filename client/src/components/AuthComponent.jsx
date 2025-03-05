import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { verifyToken } from "../utils/auth";

const AuthComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const result = await verifyToken();
        setIsAuthenticated(result.success);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>; // Prevents flicker

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default AuthComponent;
