import Navbar from "../../components/ui/Navbar";

function Detalhes() {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        {/* Card azul */}
        <div className="bg-blue-100 border border-blue-200 rounded p-4 mb-6">
          <h2 className="text-xl font-bold text-blue-800 mb-1">Title</h2>
          <p className="text-sm text-blue-700 mb-4">Description...</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
            Large button
          </button>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border-t border-gray-300">
            <thead className="text-gray-700 uppercase">
              <tr>
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">First</th>
                <th className="py-2 px-4">Last</th>
                <th className="py-2 px-4">Handle</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="border-t">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Mark</td>
                <td className="py-2 px-4">Otto</td>
                <td className="py-2 px-4">@mdo</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">Jacob</td>
                <td className="py-2 px-4">Thornton</td>
                <td className="py-2 px-4">@fat</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">3</td>
                <td className="py-2 px-4">Larry the Bird</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Detalhes;
