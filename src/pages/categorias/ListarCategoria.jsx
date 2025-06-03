import Navbar from "../../components/ui/Navbar";
import TituloLista from "../../components/ui/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

function ListarCategoria() {
  const [dados, setDados] = useState([]);

  const listar = async () => {
    let { data } = await axios.get(`http://localhost:4000/categoria`);
    console.log(data);
    setDados(data);
  };

  useEffect(() => {
    listar();
  }, []);

  return (
    <div>
      <Navbar />
      <TituloLista
        titulo="Categorias"
        descricao="Gerencie aqui os livros..."
        rota="/cadastrocategoria"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-t border-gray-300">
          <thead className="text-gray-700 uppercase">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Códiguin</th>
              <th className="py-2 px-4">Categoria</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {dados.map((d, i) => (
              <tr key={d.id}>
                <td className="py-2 px-4">
                  <a
                    className="bg-blue-500 rounded p-2"
                    href={`/cadastrocategoria/${d.idcategoria}`}
                  >
                    Alterar
                  </a>
                </td>
                <td className="py-2 px-4">{d.idcategoria}</td>
                <td className="py-2 px-4">{d.nomecategoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListarCategoria;
