import Navbar from "../../components/ui/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TituloUsuario from "../../components/ui/TituloUsuarios";
import axios from "axios";

function Usuarios() {
  const [usuario, setUsuario] = useState([]);

  const listar = async () => {
    const { data } = await axios.get(`http://localhost:4000/usuario`);
    setUsuario(data);
  };

  useEffect(() => {
    listar();
  }, []);
  return (
    <div>
      <Navbar />
      <TituloUsuario
        titulo="Usuarios"
        descricao="Gerencie aqui as Usuarios"
        rota="/cadastrousuarios"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-t border-gray-300">
          <thead className="text-gray-700 uppercase">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Nome</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Telefone</th>
              <th className="py-2 px-4">Ação</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {usuario.map((u) => (
              <tr key={u.id}>
                <td className="py-2 px-4">{u.idusuario}</td>
                <td className="py-2 px-4">{u.nome}</td>
                <td className="py-2 px-4">{u.email}</td>
                <td className="py-2 px-4">{u.telefone}</td>
                <td className="py-2 px-4">
                  <a
                    className="bg-blue-500 rounded p-2"
                    href={`/cadastrousuarios/${u.idusuario}`}
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

export default Usuarios;
