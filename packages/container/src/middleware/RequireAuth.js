import React from "react";
import { useLocation, Navigate } from "react-router-dom";

export function RequireAuth({ children, isSignedIn }) {
  let location = useLocation();
  
  if (!isSignedIn) {
    alert("You must be signed in to access the dashboard");
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  return children;
}
