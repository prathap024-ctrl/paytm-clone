import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProtectedRoute = () => {
  const [authState, setAuthState] = useState({ isAuthenticated: false, loading: true });

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await axios.get("https://paytm-clone-backend-bdfj.onrender.com/api/v2/user/currentuser", {
          withCredentials: true,
        });
        if (response.status === 200 && response.data) {
          setAuthState({ isAuthenticated: true, loading: false });
        } else {
          setAuthState({ isAuthenticated: false, loading: false });
        }
      } catch (error) {
        console.error("❌ Authentication check failed:", error.response?.data?.message || error.message);
        setAuthState({ isAuthenticated: false, loading: false });
      }
    };
    verifyAuth();
  }, []);

  if (authState.loading) 
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700 text-lg font-semibold">
        Checking authentication...
      </div>
    );

  return authState.isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
