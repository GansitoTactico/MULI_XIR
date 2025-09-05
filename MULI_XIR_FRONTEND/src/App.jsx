import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import Start_page from "./pages/Start_page.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import TaskFormPage from "./pages/TaskFormPage.jsx";
import Profile from "./pages/Profile.jsx";
import Rutas_Protegidas from "./Rutas_Protegidas.jsx";
import { LLMProvider } from "./context/LLMContext.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import { RegionalProvider } from "./context/RegionalContext.jsx";
import IntroductionPage from "./pages/introductionPage.jsx";
import LoadingPage from "./pages/loadingPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { MessageProvider } from "./context/messageContext.jsx";
import Fondo_balatro_balatrez from "./pages/fondo_balatro_balatrez.jsx";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <RegionalProvider>
          <LLMProvider>
            <MessageProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<LoginPage />}></Route>
                  <Route path="/register" element={<RegisterPage />}></Route>
                  <Route path="/" element={<Homepage />}></Route>
                  <Route
                    path="/balatro"
                    element={<Fondo_balatro_balatrez />}
                  ></Route>

                  <Route element={<Rutas_Protegidas />}>
                    <Route path="/start" element={<Start_page />}></Route>

                    <Route
                      path="/LoadingPage"
                      element={<LoadingPage />}
                    ></Route>

                    <Route path="/landing" element={<LandingPage />}></Route>

                    <Route
                      path="/introduction"
                      element={<IntroductionPage />}
                    ></Route>

                    <Route path="/tasks" element={<TaskPage />}></Route>

                    <Route path="/add-task" element={<TaskFormPage />}></Route>

                    <Route path="/tasks/:id" element={<TaskFormPage />}></Route>

                    <Route path="/profile" element={<Profile />}></Route>
                  </Route>
                </Routes>
              </BrowserRouter>
            </MessageProvider>
          </LLMProvider>
        </RegionalProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
