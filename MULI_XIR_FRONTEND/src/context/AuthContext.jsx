import {
  Children,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import { registerRequest, LoginRequest, VerifyToken } from "../api/auth";

import cookie from "js-cookie";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del contexto");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, SetisAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      SetisAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };
  const signin = async (user) => {
    try {
      const res = await LoginRequest(user);
      console.log(res);
      SetisAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };
  const logout = () => {
    cookie.remove("token");
    SetisAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors([]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [errors]);

  useEffect(() => {
    async function check() {
      const cookies = cookie.get();
      if (!cookies.token) {
        SetisAuthenticated(false);
        setLoading(false);
        setUser(false);
      }
      try {
        const res = await VerifyToken(cookies.token);
        console.log(res);
        if (!res.data) {
          SetisAuthenticated(false);
          setLoading(false);
          return;
        }

        SetisAuthenticated(true);
        setLoading(false);
        setUser(res.data);
      } catch (error) {
        console.log(error);
        SetisAuthenticated(false);
        setLoading(false);
        setUser(null);
      }
    }
    check();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        signin,
        logout,
        user,
        loading,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
