import Navbar from "../../../components/ui/Navbar";

function Livros() {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded">
        <h2 className="text-2xl font-bold mb-4">Cadastrar</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="gremio@meajuda.com"
            />
            <p className="text-sm text-gray-500 mt-1">
              We'll never share your email with anyone else.
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Senha</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Senha"
            />
          </div>

          <div className="flex items-center mb-4">
            <input id="check" type="checkbox" className="mr-2" />
            <label htmlFor="check" className="text-sm">
              Captcha
            </label>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
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
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Livros;
