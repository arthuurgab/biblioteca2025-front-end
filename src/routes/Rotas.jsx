import { Routes, Route } from "react-router-dom";
import App from "../App";
import CadastrarCategoria from "../pages/categorias/CadastrarCategoria";
import ListarCategoria from "../pages/categorias/ListarCategoria";
import Detalhes from "../pages/detalhes/Detalhe";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cadastrar_categoria" element={<CadastrarCategoria />} />
      <Route path="/listar_categoria" element={<ListarCategoria />} />
      <Route path="/detalhes" element={<Detalhes />} />
    </Routes>
  );
}

export default Rotas;
