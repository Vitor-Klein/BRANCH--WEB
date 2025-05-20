import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Inicio from './pages/Inicio';
import Estoque from './pages/Estoque';
import Retiradas from './pages/Retiradas';

function App() {
  return (
    <Router>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/retiradas" element={<Retiradas />} />
      </Routes>
    </Router>
  );
}

export default App;