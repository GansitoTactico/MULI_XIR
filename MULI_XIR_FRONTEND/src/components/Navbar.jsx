import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav
      style={{
        background: "#1a1a1a",
        padding: "1rem 2rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ marginRight: "2rem" }}>
          <h1
            style={{
              color: "#fff",
              letterSpacing: "2px",
              margin: 0,
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          ></h1>
          {isAuthenticated ? <h1>Bienvenido {user.username}</h1> : "Muli_Xir"}
        </li>
        {isAuthenticated ? (
          <>
            <li style={{ marginRight: "1.5rem" }}>
              <Link
                to="/add-task"
                style={{
                  color: "#e0e0e0",
                  background: "#333",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#444")}
                onMouseOut={(e) => (e.target.style.background = "#333")}
              >
                Añadir tarea
              </Link>
            </li>
            <li>
              <Link
                onClick={logout}
                to="/"
                style={{
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, #232526 0%, #414345 100%)",
                  border: "none",
                  padding: "0.5rem 1.2rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "500",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#232526")}
                onMouseOut={(e) =>
                  (e.target.style.background =
                    "linear-gradient(90deg, #232526 0%, #414345 100%)")
                }
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li style={{ marginRight: "1.5rem" }}>
              <Link
                to="/login"
                style={{
                  color: "#e0e0e0",
                  background: "#333",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#444")}
                onMouseOut={(e) => (e.target.style.background = "#333")}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                style={{
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, #232526 0%, #414345 100%)",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#232526")}
                onMouseOut={(e) =>
                  (e.target.style.background =
                    "linear-gradient(90deg, #232526 0%, #414345 100%)")
                }
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
