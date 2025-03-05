import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePg from "./pages/HomePg";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthComponent from "./components/authComponent";
import AuthRegister from "./components/AuthRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Route */}
        <Route element={<AuthRegister />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* Protected Route */}
        <Route element={<AuthComponent />}>
          <Route path="/home" element={<HomePg />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
