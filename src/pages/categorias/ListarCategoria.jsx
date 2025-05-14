import Navbar from "../../components/ui/Navbar";
import TituloLista from "../../components/ui/TituloLista";

function ListarCategoria() {
  return (
    <div>
      <Navbar />
      <TituloLista
        titulo="Categorias"
        descricao="Gerencie aqui os livros..."
        rota="/cadastrar_categoria"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-t border-gray-300">
          <thead className="text-gray-700 uppercase">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">First</th>
              <th className="py-2 px-4">Last</th>
              <th className="py-2 px-4">Handle</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="border-t">
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">Mark</td>
              <td className="py-2 px-4">Otto</td>
              <td className="py-2 px-4">@mdo</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">2</td>
              <td className="py-2 px-4">Jacob</td>
              <td className="py-2 px-4">Thornton</td>
              <td className="py-2 px-4">@fat</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">3</td>
              <td className="py-2 px-4">Larry the Bird</td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListarCategoria;
