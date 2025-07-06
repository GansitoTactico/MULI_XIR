import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { AuthProvider } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import fondoImg from "../assets/fondo.jpg";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/start");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${fondoImg})`,
          filter: "blur(8px)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-zinc-900/60 z-10"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-20 w-full max-w-md bg-zinc-800/90 shadow-2xl rounded-2xl p-8 border border-zinc-700">
        <div className="flex flex-col items-center mb-6">
          <svg
            className="w-14 h-14 mb-2 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 12A4 4 0 1 1 8 12a4 4 0 0 1 8 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
            />
          </svg>
          <h1 className="text-3xl font-extrabold text-white mb-1">Registro</h1>
          <p className="text-zinc-400 text-sm">Crea tu cuenta para continuar</p>
        </div>
        {RegisterErrors &&
          RegisterErrors.length > 0 &&
          RegisterErrors.map((error, i) => (
            <div
              className="bg-red-500/90 p-2 text-white text-center mb-2 rounded"
              key={i}
            >
              {error}
            </div>
          ))}
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div>
            <label
              className="block text-zinc-300 text-sm mb-1"
              htmlFor="username"
            >
              Usuario
            </label>
            <input
              id="username"
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full bg-zinc-700/80 text-white px-4 py-2 rounded-md border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              placeholder="Tu usuario"
              autoComplete="username"
            />
            {errors.username && (
              <p className="text-red-400 text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-1" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full bg-zinc-700/80 text-white px-4 py-2 rounded-md border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              placeholder="ejemplo@correo.com"
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-zinc-300 text-sm mb-1"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full bg-zinc-700/80 text-white px-4 py-2 rounded-md border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              placeholder="********"
              autoComplete="new-password"
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md mt-2 transition-colors shadow-lg"
          >
            Registrarse
          </button>
        </form>
        <div className="flex flex-col items-center mt-6">
          <p className="font-medium text-zinc-300">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:underline font-semibold"
            >
              Ingresa aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
