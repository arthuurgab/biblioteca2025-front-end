function TituloUsuario(props) {
  return (
    <div className="bg-blue-100 border border-blue-200 rounded p-4 mb-6">
      <h2 className="text-xl font-bold text-blue-800 mb-1">{props.titulo}</h2>
      <p className="text-sm text-blue-700 mb-4">{props.descricao}</p>
      <a
        href={props.rota}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
      >
        Novo
      </a>
    </div>
  );
}

export default TituloUsuario;
