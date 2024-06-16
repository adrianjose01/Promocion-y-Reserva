import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RegisterForm from "./Pages/RegisterForm";
import LoginForm from "./Pages/LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/registrarse" element={<RegisterForm />} />
      <Route path="/iniciar-sesion" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
