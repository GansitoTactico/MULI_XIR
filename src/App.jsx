import { useState } from 'react';
import { FiUser, FiLock, FiEye, FiEyeOff, FiLogIn } from 'react-icons/fi';
import './login.css';

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación
    console.log(formData);
  };

  const handleFocus = (field) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused(prev => ({ ...prev, [field]: false }));
  };

  return (
    <div className="auth-container">      
      <div className="auth-card">
        <div className="auth-header">
          <FiLogIn className="auth-icon" />
          <h1>Bienvenido</h1>
          <p>Ingresa tus credenciales</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={`form-group ${isFocused.email ? 'focused' : ''}`}>
            <FiUser className="input-icon" />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              required
            />
          </div>

          <div className={`form-group ${isFocused.password ? 'focused' : ''}`}>
            <FiLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              onFocus={() => handleFocus('password')}
              onBlur={() => handleBlur('password')}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Recordarme
            </label>
            <a href="#forgot-password">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" className="auth-button">
            Iniciar Sesión
          </button>
        </form>

        <div className="auth-footer">
          <p>¿No tienes cuenta? <a href="#register">Regístrate aquí</a></p>
          <div className="social-auth">
            <button className="social-button google">Continuar con Google</button>
            <button className="social-button github">Continuar con GitHub</button>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default AuthForm;