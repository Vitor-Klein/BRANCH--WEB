import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api";
import "./style.css";

const Estoque = () => {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modelo, setModelo] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    const fetchItens = async () => {
      try {
        const response = await api.get("/item");
        setItens(response.data);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItens();
  }, []);

  const itensFiltrados = itens.filter((item) => {
    const termo = search.toLowerCase();
    const tipoMatch = item.tipo.toLowerCase().includes(termo);
    const categoriaMatch = item.categoria?.toLowerCase().includes(termo); // se tiver campo categoria
    const modeloFiltro = modelo ? item.tipo === modelo : true;
    const categoriaFiltro = categoria ? item.categoria === categoria : true;

    return (tipoMatch || categoriaMatch) && modeloFiltro && categoriaFiltro;
  });

  return (
    <div className="estoque-container">
      <Sidebar />
      <main className="estoque-main">
        <div className="estoque-header">
          <div className="estoque-actions">
            <input
              type="text"
              placeholder="🔍 Pesquise aqui"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="select-filtro"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            >
              <option value="">Modelo</option>
              <option value="camiseta">Camiseta</option>
              <option value="bermuda">Bermuda</option>
              <option value="jaqueta">Jaqueta</option>
            </select>

            <select
              className="select-filtro"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Categoria</option>
              <option value="infantil">Infantil</option>
              <option value="adulto">Adulto</option>
              <option value="unissex">Unissex</option>
            </select>

            <button className="btn-registrar">+ Registrar peça</button>
          </div>
        </div>

        {loading ? (
          <p>Carregando estoque...</p>
        ) : (
          <div className="grid">
            {itensFiltrados.map((item) => (
              <div key={item.idItem} className="item-card">
                <button className="edit">✏️</button>
                <h3>{item.tipo}</h3>
                <p>
                  <strong>Tamanho:</strong> {item.tamanho}
                </p>
                <p>
                  <strong>Quantidade:</strong> {item.quantidade}
                </p>
                {/* <p>
                  <strong>Categoria:</strong> {item.categoria}
                </p> */}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Estoque;
