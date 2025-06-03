import Navbar from "../../components/ui/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CadastrarCategoria() {
  const navegacao = useNavigate();
  const { id } = useParams();
  const voltar = () => {
    navegacao("/listacategoria");
  };
  const [nomecategoria, setNomeCategoria] = useState("");
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded">
        <h2 className="text-2xl font-bold mb-4">Cadastrar</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Código</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={id}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Nome da Categoria
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={nomecategoria}
              onChange={(evento) => setNomeCategoria(evento.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Salvar
            </button>
            <button
              type="button"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Deletar
            </button>
            <button
              type="button"
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => voltar()}
            >
              Cancelar
            </button>
          </div>
        </form>
        <h1>{nomecategoria}</h1>
      </div>
    </div>
  );
}

export default CadastrarCategoria;
