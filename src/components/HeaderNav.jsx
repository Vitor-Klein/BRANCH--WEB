import { Link } from 'react-router-dom';
//import './HeaderNav.css'; tem q fazer o css

function HeaderNav() {
  return (
    <>
      <header>
        <h1>SANEM</h1>
      </header>
      <nav>
        <Link to="/" className="redirects-button">Início</Link><br />
        <Link to="/estoque" className="redirects-button">Estoque</Link><br />
        <Link to="/doacoes" className="redirects-button">Doações</Link><br />
        <Link to="/retiradas" className="redirects-button">Retiradas</Link><br />
        <Link to="/beneficiarios" className="redirects-button">Beneficiários</Link><br />
        <Link to="/relatorios" className="redirects-button">Relatórios</Link><br />
      </nav>
    </>
  );
}

export default HeaderNav;
