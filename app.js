const express = require('express');
const app = express();
const path = require('path');

const ruta = path.join(__dirname, './public');

app.use( express.static(ruta) );

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'))
});
app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
});




app.listen(3000, () => {
    console.log('servidor corriendo')
});