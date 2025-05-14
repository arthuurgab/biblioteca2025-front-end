import Navbar from "../../components/ui/Navbar";
import TituloLista from "../../components/ui/TituloLista";

function ListarCategoria() {
  return (
    <div>
      <Navbar />
      <TituloLista
        titulo="Categorias"
        descrição="Gerencie aqui os livros..."
        rota="/cadastrar_categoria"
      />
    </div>
  );
}

export default ListarCategoria;
