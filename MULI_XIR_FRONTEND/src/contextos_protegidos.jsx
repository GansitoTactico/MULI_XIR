import { useRegionalContext } from "./context/RegionalContext.jsx";
import { Navigate, Outlet } from "react-router-dom";

function contextos_protegidos() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loader, ContextTrue } = useRegionalContext();

  if (loader) return <h1>Loading...</h1>;

  if (!loader && !ContextTrue) {
    return <Navigate to="/start" replace />;
  }

  return <Outlet />;
}

export default contextos_protegidos;
