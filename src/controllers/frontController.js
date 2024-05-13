const fs = require('fs');

const frontFile = (req, res) => {
    res.sendFile(__dirname + '/index.html');
};

const CancionesPath = 'Repertorio.json';

const getSongs = (req, res) => {
    try {
        const Canciones = JSON.parse(fs.readFileSync(CancionesPath, 'utf8'));
        res.json(Canciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createSong = (req, res) => {
    try {
        const { titulo, artista, tono } = req.body;
        const Canciones = JSON.parse(fs.readFileSync(CancionesPath, 'utf8'));
        const newTodo = {
            id: Canciones.length + 1,
            titulo,
            artista,
            tono,
            done: false
        };
        Canciones.push(newTodo);
        fs.writeFileSync(CancionesPath, JSON.stringify(Canciones));
        res.json(newTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateSong = (req, res) => {
    try {
        const { id } = req.params;
        const Canciones = JSON.parse(fs.readFileSync(CancionesPath, 'utf8'));
        const updatedCanciones = Canciones.map(todo => {
            if (todo.id == id) {
                todo.done = !todo.done;
            }
            return todo;
        });
        fs.writeFileSync(CancionesPath, JSON.stringify(updatedCanciones));
        res.status(200).send('Todo modificado');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteSong = (req, res) => {
    try {
        const { id } = req.params;
        const Canciones = JSON.parse(fs.readFileSync(CancionesPath, 'utf8'));
        const filteredCanciones = Canciones.filter(Cancion => Cancion.id != id);
        fs.writeFileSync(CancionesPath, JSON.stringify(filteredCanciones));
        res.status(200).send('Eliminado');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    frontFile,
    getSongs,
    createSong,
    updateSong,
    deleteSong
};