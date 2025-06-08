import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Estoque from "./pages/Estoque/Estoque_M";
import Retiradas from "./pages/Retiradas";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/retiradas" element={<Retiradas />} />
      </Routes>
    </Router>
  );
}