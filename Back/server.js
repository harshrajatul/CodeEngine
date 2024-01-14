// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { submitCode } = require('./compilerFunc/compiler');

const app = express();
const port = 3001;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with the origin of your React app
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());

app.post('/submitCode', async (req, res) => {
    try {
        const { code, input } = req.body;
        const result = await submitCode(code, input);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
