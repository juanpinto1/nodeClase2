const Cancion = ({ Cancion: Cancion, removeCancion: removeCancion, updateCancion: updateCancion }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex">
        <h5
          className={
            Cancion.done ? "text-decoration-line-through me-auto" : "me-auto"
          }
        >
          {Cancion.title}
        </h5>
        <button
          className="btn btn-sm btn-warning me-1"
          onClick={() => updateCancion(Cancion.id)}
        >
          Update
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => removeCancion(Cancion.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
export default Cancion;
