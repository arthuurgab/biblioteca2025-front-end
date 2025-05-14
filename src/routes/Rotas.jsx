import { Routes, Route } from "react-router-dom";
import App from "../App";
import CadastrarCategoria from "../pages/categorias/CadastrarCategoria";
import ListarCategoria from "../pages/categorias/ListarCategoria";

function Rotas() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastrar_categoria" element={<CadastrarCategoria />} />
        <Route path="/listar_categoria" element={<ListarCategoria />} />
      </Routes>
    </div>
  );
}

export default Rotas;
