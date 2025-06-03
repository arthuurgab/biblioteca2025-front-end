import Navbar from "../../components/ui/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TituloEditoras from "../../components/ui/TItuloEditoras";
import axios from "axios";

function Editoras() {
  const [editoras, setEditoras] = useState([]);

  const listar = async () => {
    const { data } = await axios.get(`http://localhost:4000/editora`);
    setEditoras(data);
  };

  useEffect(() => {
    listar();
  }, []);

  return (
    <div>
      <Navbar />
      <TituloEditoras
        titulo="Editora"
        descricao="Gerencie aqui as Editoras"
        rota="/cadastroeditora"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-t border-gray-300">
          <thead className="text-gray-700 uppercase">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Nome</th>
              <th className="py-2 px-4">CNPJ</th>
              <th className="py-2 px-4">Endereço</th>
              <th className="py-2 px-4">Ação</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {editoras.map((e) => (
              <tr key={e.id}>
                <td className="py-2 px-4">{e.ideditora}</td>
                <td className="py-2 px-4">{e.nomeeditora}</td>
                <td className="py-2 px-4">{e.cnpj}</td>
                <td className="py-2 px-4">{e.endereco}</td>
                <td className="py-2 px-4">
                  <a
                    className="bg-blue-500 rounded p-2"
                    href={`/cadastroeditora/${e.ideditora}`}
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

export default Editoras;
