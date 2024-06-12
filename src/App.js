import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RegisterForm from "./Pages/RegisterForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
