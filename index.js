const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (_, res) => {
    res.status(200).json({
        name: 'Node server',
        desc: 'Node server running using docker container',
        date: Date.now()
    });
});

app.listen(3000, () => 'Server PORT: 3000');