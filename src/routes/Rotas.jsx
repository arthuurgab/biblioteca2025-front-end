import { Routes, Route } from "react-router-dom";
import App from "../App";
import CadastrarCategoria from "../pages/categorias/CadastrarCategoria";
import ListarCategoria from "../pages/categorias/ListarCategoria";
import Editoras from "../pages/editora/Editoras";
import CadastroEditoras from "../pages/editora/FormEditora";
import Livros from "../pages/livros/Livros";
import CadastroLivro from "../pages/livros/FormLivro";

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

        <Route path="/livros" element={<Livros />} />
        <Route path="/cadastrolivro" element={<CadastroLivro />} />
        <Route path="/cadastrolivro/:id" element={<CadastroLivro />} />
      </Routes>
    </div>
  );
}

export default Rotas;
