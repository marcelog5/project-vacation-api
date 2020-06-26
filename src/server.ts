import express from 'express';

const app = express();

const PORT = 3333;
const HOST = '0.0.0.0';

app.get('/users', (request, response) => {
    response.send('Server is working');
});

app.listen(PORT, HOST);