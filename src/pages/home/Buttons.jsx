import { useState, useEffect } from "react";
import axios from "axios";

function ButtonsHome() {
  const [categoria, setCategoria] = useState([]);
  const [livro, setLivro] = useState([]);
  const [livrosFiltrados, setLivrosFiltrados] = useState([]);

  const listarCategoria = async () => {
    let { data } = await axios.get(`http://localhost:4000/categoria`);
    setCategoria(data);
  };

  const listarLivros = async () => {
    let { data } = await axios.get(`http://localhost:4000/livro`);
    setLivro(data);
    setLivrosFiltrados(data);
  };

  const filtrarLivros = (idcategoria) => {
    const filtrados = livro.filter((l) => l.idcategoria === idcategoria);
    setLivrosFiltrados(filtrados);
  };

  useEffect(() => {
    listarCategoria();
    listarLivros();
  }, []);

  return (
    <div>
      <div className="flex items-center gap-2 justify-center">
        {categoria.map((c) => (
          <button
            key={c.idcategoria}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => filtrarLivros(c.idcategoria)}
          >
            {c.nomecategoria}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 px-96">
        {livrosFiltrados.map((l) => (
          <div
            key={l.idlivro}
            className="flex border rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://via.placeholder.com/100x150"
              alt="Livro"
              className="w-24 h-36 object-cover rounded-lg"
            />
            <div className="ml-4 flex flex-col justify-between">
              <div>
                <h5 className="text-lg font-semibold text-gray-800">
                  {l.titulo}
                </h5>
                <p className="text-sm text-gray-600">
                  Publicação: {l.publicacao}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {l.paginas} Páginas
                </p>
                <p className="text-sm text-gray-500">Editora: {l.editora}</p>
                <p className="text-sm text-gray-500">Edição: {l.edicao}</p>
              </div>
              <a
                href={`/emprestar/${l.idlivro}/${l.titulo}`}
                className="mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Emprestar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ButtonsHome;
