import { useEffect, useState } from 'react';
const App = () => {
	const url = 'http://localhost:3000/api/files';

	const [Canciones, setCanciones] = useState([]);

	const getCanciones = async () => {
		const response = await fetch(url + '/Canciones');
		const Canciones = await response.json();
		setCanciones(Canciones);
	};

	useEffect(() => {
		getCanciones();
	}, []);

	const addCanciones = async (title) => {
		const response = await fetch(url + '/Canciones', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title }),
		});
		const Cancion = await response.json();
		setCanciones([...Canciones, Cancion]);
	};

	const removeCancion = async (id) => {
		const response = await fetch(`${url}/Canciones/${id}`, {
			method: 'DELETE',
		});
		if (response.status !== 200) {
			return alert('Something went wrong');
		}
		setCanciones(Canciones.filter((Cancion) => Cancion.id !== id));
	};

	const updateCancion = async (id) => {
		const response = await fetch(`${url}/Canciones/${id}`, {
			method: 'PUT',
		});
		if (response.status !== 200) {
			return alert('Something went wrong');
		}
		setCanciones(
			Canciones.map((Cancion) => {
				if (Cancion.id === id) {
					Cancion.done = !Cancion.done;
				}
				return Cancion;
			})
		);
	};

	return (
		<div className="container">
			<h1 className="">Canciones</h1>
			<CancionForm addCancion={addCanciones} />
			<Canciones
				Canciones={Canciones}
				removeCanciones={removeCancion}
				updateCanciones={updateCancion}
			/>
		</div>
	);
};
export default App;
