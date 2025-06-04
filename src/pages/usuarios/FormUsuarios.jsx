import Navbar from "../../components/ui/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CadastroUsuario() {
  const navegacao = useNavigate();
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const selecionar = async () => {
    let { data } = await axios.get(`http://localhost:4000/usuario/${id}`);
    setNome(data.nome);
    setEmail(data.email);
    setTelefone(data.telefone);
  };
  const alterar = async () => {
    let body = {
      nome: nome,
      email: email,
      telefone: telefone,
    };

    await axios.put(`http://localhost:4000/usuario/${id}`, body);
    voltar();
  };

  const inserir = async () => {
    let body = {
      nome: nome,
      email: email,
      telefone: telefone,
    };

    await axios.post(`http://localhost:4000/usuario`, body);
    voltar();
  };

  const salvar = async () => {
    if (id) {
      alterar();
    } else {
      inserir();
    }
  };
  useEffect(() => {
    if (id) {
      selecionar();
    }
  }, []);

  const excluir = async () => {
    await axios.delete(`http://localhost:4000/usuario/${id}`);
    voltar();
  };

  const voltar = () => {
    navegacao("/usuarios");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded">
        <h2 className="text-2xl font-bold mb-4">Cadastrar {id && id}</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Telefone</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={telefone}
              onChange={(evento) => setTelefone(evento.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => salvar()}
            >
              Salvar
            </button>
            {id && (
              <button
                type="button"
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => excluir()}
              >
                Deletar
              </button>
            )}
            <button
              type="button"
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => voltar()}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroUsuario;
