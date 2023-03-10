import http from 'http';
import express from 'express';

const app = express();
const port = 8000;

app.get('/hello', (req, res) => {
    res.send('Hi!')
})

app.get('/goodbye', (req, res) => {
    res.send('goodbye!')
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
});