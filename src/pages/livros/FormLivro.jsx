import Navbar from "../../components/ui/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CadastroLivro() {
  const navegacao = useNavigate();
  const { id } = useParams();
  const [titulo, setTitulo] = useState("");
  const [publicacao, setPublicacao] = useState("");
  const [paginas, setPaginas] = useState("");
  const [categoria, setCategoria] = useState("");
  const [editora, setEditora] = useState("");
  const [edicao, setEdicao] = useState("");
  const [resumo, setResumo] = useState("");

  const selecionar = async () => {
    let { data } = await axios.get(`http://localhost:4000/livro/${id}`);
    setTitulo(data.titulo);
    setPublicacao(data.publicacao);
    setPaginas(data.paginas);
    setCategoria(data.idcategoria);
    setEditora(data.ideditora);
    setEdicao(data.edicao);
    setResumo(data.resumo);
  };
  const alterar = async () => {
    let body = {
      titulo: titulo,
      publicacao: publicacao,
      paginas: paginas,
      idcategoria: categoria,
      ideditora: editora,
      edicao: edicao,
      resumo: resumo,
    };

    await axios.put(`http://localhost:4000/livro/${id}`, body);
    voltar();
  };

  const inserir = async () => {
    let body = {
      titulo: titulo,
      publicacao: publicacao,
      paginas: paginas,
      idcategoria: categoria,
      ideditora: editora,
      edicao: edicao,
      resumo: resumo,
    };

    await axios.post(`http://localhost:4000/livro`, body);
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
    await axios.delete(`http://localhost:4000/livro/${id}`);
    voltar();
  };

  const voltar = () => {
    navegacao("/livros");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded">
        <h2 className="text-2xl font-bold mb-4">Cadastrar {id && id}</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Título</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={titulo}
              onChange={(evento) => setTitulo(evento.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Ano de Publicação
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={publicacao}
              onChange={(evento) => setPublicacao(evento.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Número de Páginas
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={paginas}
              onChange={(evento) => setPaginas(evento.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Categoria</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={categoria}
              onChange={(evento) => setCategoria(evento.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Editora</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={editora}
              onChange={(evento) => setEditora(evento.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Número da Edição
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={edicao}
              onChange={(evento) => setEdicao(evento.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Resumo</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={resumo}
              onChange={(evento) => setResumo(evento.target.value)}
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

export default CadastroLivro;
