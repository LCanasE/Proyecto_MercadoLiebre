const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen(process.env.PORT || 3020, () => console.log('Servidor corriendo ML-3020'));

app.get('/', (req, res) => res.sendFile(path.resolve('./views/home.html')))

app.get('/register', (req, res) => res.sendFile(path.resolve('./views/register.html')))

app.post('/register', (req, res) => res.redirect("/"))

app.get('/login', (req, res) => res.sendFile(path.resolve('./views/login.html')))

/* app.get("/ofertas", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/ofertas.html"))
}
)

app.get("/tiendasoficiales", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/tiendasOficiales.html"))
}
)
app.get("/vender", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/vender.html"))
}
)
app.get("/ayuda", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/ayuda.html"))
}
)
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
}
)
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
}
)
app.get("/miscompras", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/misCompras.html"))
}
) */