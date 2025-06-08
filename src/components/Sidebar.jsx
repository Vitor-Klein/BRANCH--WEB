import { Link, useLocation } from 'react-router-dom';
import "./Estoque_Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Início', icon: '🏠' },
    { to: '/estoque', label: 'Estoque', icon: '📦' },
    { to: '/doacao', label: 'Doação', icon: '❤️' },
    { to: '/retiradas', label: 'Retirada', icon: '📋' },
    { to: '/beneficiario', label: 'Beneficiário', icon: '👤' },
    { to: '/relatorios', label: 'Relatórios', icon: '📊' },
  ];    

  return (
    <div className="sidebar">
      <div className="sidebar-header">SANEM</div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`nav-button ${location.pathname === item.to ? 'active' : ''}`}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
