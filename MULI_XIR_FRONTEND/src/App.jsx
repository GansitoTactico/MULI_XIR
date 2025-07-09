import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import Start_page from "./pages/Start_page.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ContextLoader from "./pages/contextLoader.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import TaskFormPage from "./pages/TaskFormPage.jsx";
import Profile from "./pages/Profile.jsx";
import Rutas_Protegidas from "./Rutas_Protegidas.jsx";
import Contextos_Protegidos from "./contextos_protegidos.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import { RegionalProvider } from "./context/RegionalContext.jsx";
import Pagina_prueba_TF from "./pages/pagina_prueba_TF.jsx";

function app() {
  return (
    <AuthProvider>
      <TaskProvider>
        <RegionalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />}></Route>

              <Route path="/register" element={<RegisterPage />}></Route>

              <Route path="/" element={<Homepage />}></Route>

              <Route element={<Rutas_Protegidas />}>
                <Route path="/start" element={<Start_page />}></Route>

                <Route path="/tasks" element={<TaskPage />}></Route>

                <Route path="/add-task" element={<TaskFormPage />}></Route>

                <Route path="/tasks/:id" element={<TaskFormPage />}></Route>

                <Route path="/profile" element={<Profile />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </RegionalProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default app;
