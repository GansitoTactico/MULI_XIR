import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";

function Rutas_Protegidas() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default Rutas_Protegidas;
