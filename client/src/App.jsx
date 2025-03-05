import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePg from "./pages/HomePg";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthComponent from "./components/authComponent";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Route */}
        <Route element={<AuthComponent />}>
          <Route path="/home" element={<HomePg />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
