import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function contextLoader() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/start" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
}
