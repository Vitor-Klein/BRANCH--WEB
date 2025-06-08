import React from 'react';
import Sidebar from "../../components/Sidebar";
import './style.css';

const Estoque = () => {
  return (
    <div className="estoque-container">
      <Sidebar />
      <main className="estoque-main">
        <div className="estoque-header">
          <h1>Estoque</h1>
          <div className="estoque-actions">
            <input type="text" placeholder="🔍 Pesquise aqui" />
            <button>Modelo ▸</button>
            <button>Categoria ▸</button>
            <button className="btn-registrar">+ Registrar peça</button>
          </div>
        </div>

     
      </main>
    </div>
  );
};

export default Estoque;
