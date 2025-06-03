import { Routes, Route } from "react-router-dom";
import App from "../App";
import CadastrarCategoria from "../pages/categorias/CadastrarCategoria";
import ListarCategoria from "../pages/categorias/ListarCategoria";
import Editoras from "../pages/editora/Editoras";
import CadastroEditoras from "../pages/editora/FormEditora";

function Rotas() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastrocategoria" element={<CadastrarCategoria />} />
        <Route path="/cadastrocategoria/:id" element={<CadastrarCategoria />} />
        <Route path="/listacategoria" element={<ListarCategoria />} />

        <Route path="/editoras" element={<Editoras />} />
        <Route path="/cadastroeditora" element={<CadastroEditoras />} />
        <Route path="/cadastroeditora/:id" element={<CadastroEditoras />} />
      </Routes>
    </div>
  );
}

export default Rotas;
