import { Routes, Route } from "react-router-dom";
import App from "../App";
import CadastrarLivros from "../pages/cadastrar/livros/Livro";
import Detalhes from "../pages/detalhes/Detalhe";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cadastrar_livros" element={<CadastrarLivros />} />
      <Route path="/detalhes" element={<Detalhes />} />
    </Routes>
  );
}

export default Rotas;
