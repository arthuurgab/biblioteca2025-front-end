function Navbar() {
  return (
    <nav className="bg-blue-600 px-4 py-3 flex items-center justify-between">
      {/* Links */}
      <div className="flex items-center gap-6 text-sm text-white ml-4">
        <a href="/" className="font-bold text-xl">
          Biblioteca 2k25
        </a>
        <a href="/cadastrocategoria" className="hover:underline">
          <span>Categorias</span>
        </a>
        <a href="/listacategoria" className="hover:underline">
          <span>Listagens</span>
        </a>
        <a href="/editoras" className="hover:underline">
          <span>Editoras</span>
        </a>
        <a href="/livros" className="hover:underline">
          <span>Livros</span>
        </a>
      </div>

      {/* Campo de busca */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 rounded border border-gray-300"
        />
        <button className="bg-white text-blue-600 px-3 py-1 rounded border border-blue-600 hover:bg-blue-100">
          Search
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
