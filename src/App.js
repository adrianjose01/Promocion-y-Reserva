import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RegisterForm from "./Pages/RegisterForm";
import LoginForm from "./Pages/LoginForm";
import Profile from "./Pages/Profile";
import ResetPassword from "./Pages/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/registrarse" element={<RegisterForm />} />
      <Route path="/iniciar-sesion" element={<LoginForm />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/reestablecer-contraseña" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
