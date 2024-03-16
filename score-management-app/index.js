const express = require('express')
const app = express()
const redis = require('redis')
const redis_uri = process.env.REDIS_URI || 'redis://localhost:6379'
const port = process.env.PORT || 4000

const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');



let users = {};
let scores = {};
let submissions = {};


app.use(cors());
app.use(express.static('html'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Redis connection
const client = redis.createClient({url:redis_uri})

client.on('connect', () => {
  console.log('Connected to Redis')
})

client.on('error', (err) => {
  console.error('Redis Error:', err)
})


function loadUsers() {
    try {
        users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf8'));
    } catch (error) {
        console.log('No users.json found. Starting with an empty user list.');
    }
}


function loadSubmissions() {
    try {
        submissions = JSON.parse(fs.readFileSync(path.join(__dirname, 'submissions.json'), 'utf8'));
    } catch (error) {
        console.log('No submissions.json found. Starting fresh.');
    }
}

app.get('/all-scores', (req, res) => {
    let allScores = Object.keys(scores).map(user => ({
        user,
        score: scores[user],
        submissions: submissions[user],
        averageTry: submissions[user] ? (scores[user] / submissions[user]).toFixed(2) : 0
    }));

    allScores.sort((a, b) => b.score - a.score);

    res.json(allScores);
});

function loadScores() {
    try {
        scores = JSON.parse(fs.readFileSync(path.join(__dirname, 'scores.json'), 'utf8'));
    } catch (error) {
        console.log('No scores.json found. Starting fresh.');
    }
}







/**/
(async ()=>{await client.connect()})();

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    loadScores();
    loadUsers();
    loadSubmissions();
});

