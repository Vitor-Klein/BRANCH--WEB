import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "./style.css";

const Doacao = () => {
  const [nomePeca, setNomePeca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [modelo, setModelo] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novaDoacao = {
      nomePeca,
      categoria,
      modelo,
      quantidade: Number(quantidade),
    };

    try {
      console.log("Enviando para API:", novaDoacao);
      alert("Doação registrada com sucesso!");
    } catch (error) {
      console.error("Erro ao registrar doação:", error);
      alert("Erro ao registrar doação.");
    }
  };

  return (
    <div className="doacao-container">
      <Sidebar />

      <main className="doacao-main">
        {/* Cabeçalho da Página */}
        <div className="doacao-header">
          <h1 className="titulo-pagina">Doação</h1>
          <h2 className="subtitulo">Gerenciar Doações 📃</h2>
        </div>

        {/* Botões de ação */}
        <div className="doacao-actions">
          <button
            className="btn-registrar"
            onClick={() => setShowForm((prev) => !prev)}
          >
            + Registrar Doação
          </button>

          <button
            className="btn-pesquisar"
            onClick={() => alert("Função de pesquisa ainda não implementada")}
          >
            🔍 Pesquisar Doação
          </button>
        </div>

        {/* Formulário */}
        {showForm && (
          <form className="form-doacao" onSubmit={handleSubmit}>
            <h3 className="form-titulo">Nova Doação</h3>

            <label>Nome da Peça</label>
            <input
              type="text"
              value={nomePeca}
              onChange={(e) => setNomePeca(e.target.value)}
              placeholder="Digite o nome da peça"
            />

            <div className="linha-form">
              <div className="campo">
                <label>Categoria</label>
                <select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="infantil">Infantil</option>
                  <option value="adulto">Adulto</option>
                  <option value="unissex">Unissex</option>
                </select>
              </div>

              <div className="campo">
                <label>Modelo</label>
                <select
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="camiseta">Camiseta</option>
                  <option value="bermuda">Bermuda</option>
                  <option value="jaqueta">Jaqueta</option>
                </select>
              </div>
            </div>

            <label>Quantidade</label>
            <input
              type="number"
              min="1"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />

            <button type="submit" className="btn-enviar">
              Registrar
            </button>
          </form>
        )}
      </main>
    </div>
  );
};

export default Doacao;
