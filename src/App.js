import GlobalStyle from "./GlobalStyle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Finances from "./pages/Finances";
import Inflow from "./pages/Inflow";
import Outflow from "./pages/Outflow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/inflow" element={<Inflow />} />
          <Route path="/outflow" element={<Outflow />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
