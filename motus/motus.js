const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000
app.use(express.static('html'));

// Read the word list from the file and store it in an array variable
const wordList = fs.readFileSync('./data/liste_francais_utf8.txt', 'utf-8').split('\n');

// API endpoint to return a random word
app.get('/word', (req, res) => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const word = wordList[randomIndex];
    res.send(word);
});

// Endpoint POST pour gérer la redirection
app.post('/scoreButton', (req, res) => {
    // Effectuer la redirection vers http://localhost:4000
    res.redirect('http://localhost:4000');
});

app.listen(port, () => {
    console.log(`Motus: Server running at http://localhost:3000`)
})












