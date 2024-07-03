const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bonjour Microsoft Azure, im Sif eddine'));
app.get('/profil', (req, res) => res.send('Bonjour, this is your profil, mrahba bik khouya'));
app.get('/login', (req, res) => res.send('Maendnach login akhouya, smouhatte'));
app.listen(3000, () => console.log('Application en écoute sur le port 3000.'))