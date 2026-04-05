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
import ChatBotPage from "./pages/chatBotPage.jsx";
import TrackerMenu from "./pages/Tracker_Menu.jsx";
import WebCam from "./pages/WebCam.jsx";
import CreateProcessPage from "./pages/CreateProcessPage.jsx";
import ProcessesPage from "./pages/ProcessesPage.jsx";
import { ProcessProvider } from "./context/ProcessContext.jsx";
import ProcessCreatedPage from "./pages/ProcessCreatedPage.jsx";
import Document from "./pages/document.jsx";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
function App() {
  return (
    <AuthProvider>
      <ProcessProvider>
        <TaskProvider>
          <RegionalProvider>
            <LLMProvider>
              <MessageProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/document" element={<Document />}></Route>
                    <Route path="/" element={<Homepage />}></Route>

                    <Route element={<Rutas_Protegidas />}>
                      <Route path="/start" element={<Start_page />}></Route>

                      <Route path="/escaner" element={<WebCam />}></Route>

                      <Route
                        path="/processes"
                        element={<ProcessesPage />}
                      ></Route>

                      <Route path="/chatBot" element={<ChatBotPage />}></Route>

                      <Route path="/Tracker" element={<TrackerMenu />}></Route>

                      <Route
                        path="/process-created"
                        element={<ProcessCreatedPage />}
                      ></Route>

                      <Route
                        path="/add-process"
                        element={<CreateProcessPage />}
                      ></Route>
                      <Route
                        path="/processes/:id"
                        element={<CreateProcessPage />}
                      ></Route>

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

                      <Route
                        path="/add-task"
                        element={<TaskFormPage />}
                      ></Route>

                      <Route
                        path="/tasks/:id"
                        element={<TaskFormPage />}
                      ></Route>

                      <Route path="/profile" element={<Profile />}></Route>
                    </Route>
                  </Routes>
                </BrowserRouter>
              </MessageProvider>
            </LLMProvider>
          </RegionalProvider>
        </TaskProvider>
      </ProcessProvider>
    </AuthProvider>
  );
}

export default App;
