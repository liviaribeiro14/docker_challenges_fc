const express = require('express');
const app = express();
const port = 3000;
// const config = {
//     host: 'db',
//     user: 'root',
//     password: 'root',
//     database: 'node_challenge_db',
// }
// const mysql = require('mysql2');
// const connection = mysql.createConnection(config);

// const sql = `INSERT INTO people(name) VALUES ('Margot')`;
// connection.query(sql);
// connection.end();

app.get('/', (req, res) => {
    res.send('Hey, there!');
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});