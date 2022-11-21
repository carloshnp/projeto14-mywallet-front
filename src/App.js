import GlobalStyle from "./GlobalStyle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Finances from "./pages/Finances";
import NewOperation from "./pages/NewOperation";
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
          <Route path="/operation" element={<NewOperation />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
