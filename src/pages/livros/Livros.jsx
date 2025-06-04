import Navbar from "../../components/ui/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TituloLivros from "../../components/ui/TituloLivros";
import axios from "axios";

function Livros() {
  const [livros, setLivros] = useState([]);

  const listar = async () => {
    const { data } = await axios.get(`http://localhost:4000/livro`);
    setLivros(data);
  };

  useEffect(() => {
    listar();
  }, []);
  return (
    <div>
      <Navbar />
      <TituloLivros
        titulo="Livros"
        descricao="Gerencie aqui os Livros"
        rota="/cadastrolivro"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-t border-gray-300">
          <thead className="text-gray-700 uppercase">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Titulo</th>
              <th className="py-2 px-4">Edição</th>
              <th className="py-2 px-4">Paginas</th>
              <th className="py-2 px-4">Publicação</th>
              <th className="py-2 px-4">Foto</th>
              <th className="py-2 px-4">Localização</th>
              <th className="py-2 px-4">Resumo</th>
              <th className="py-2 px-4">Ativo</th>
              <th className="py-2 px-4">Condição Fisica</th>
              <th className="py-2 px-4">Emprestado</th>
              <th className="py-2 px-4">Editora</th>
              <th className="py-2 px-4">Categoria</th>
              <th className="py-2 px-4">Ação</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {livros.map((l) => (
              <tr key={l.id}>
                <td className="py-2 px-4">{l.idlivro}</td>
                <td className="py-2 px-4">{l.titulo}</td>
                <td className="py-2 px-4">{l.edicao}</td>
                <td className="py-2 px-4">{l.paginas}</td>
                <td className="py-2 px-4">{l.publicacao}</td>
                <td className="py-2 px-4">
                  <img
                    src={l.foto}
                    alt={l.titulo}
                    className="h-16 w-16 object-cover"
                  />
                </td>
                <td className="py-2 px-4">{l.localizacao}</td>
                <td className="py-2 px-4">{l.resumo}</td>
                <td className="py-2 px-4">{l.ativo ? "Sim" : "Não"}</td>
                <td className="py-2 px-4">{l.condicaofisica}</td>
                <td className="py-2 px-4">{l.emprestado ? "Sim" : "Não"}</td>
                <td className="py-2 px-4">{l.ideditora}</td>
                <td className="py-2 px-4">{l.idcategoria}</td>
                <td className="py-2 px-4">
                  <a
                    className="bg-blue-500 rounded p-2"
                    href={`/cadastrolivro/${l.idlivro}`}
                  >
                    Alterar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Livros;
