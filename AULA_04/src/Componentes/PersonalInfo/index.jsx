function PersonalInfo(usuarios) {
  return (
    <div className="personal-info">
        {props.usuarios.map(usuario=>(
          <>
          <p>Nome: {usuario.nome}</p>
          <p>Email: {usuario.email}</p>
          <p>Telefone: {usuario.telefone}</p>
          <img src={usuario.imagem}/>
          </>
        ))}
  </div>
  );
}

export default PersonalInfo;


