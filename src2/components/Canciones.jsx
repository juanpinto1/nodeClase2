
export const Canciones = ({ Canciones: Canciones, removeCanciones: removeCanciones, updateCanciones: updateCanciones }) => {
  return (
    <ul className="list-group mt-5">
      {Canciones.map((Cancion) => (
        <Cancion
          key={Cancion.id}
          Cancion={Cancion}
          removeCanciones={removeCanciones}
          updateCanciones={updateCanciones}
        />
      ))}

      {Canciones.length === 0 && (
        <li className="list-group-item">
          <div className="d-flex">
            <h5>No Canciones found</h5>
          </div>
        </li>
      )}
    </ul>
  );
};
