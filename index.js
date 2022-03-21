const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const porta = 3001;
const path = require("path");
app.use(express.json());
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));


const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/paletas", function (req, res) {
    res.send(paletas);
});

app.get('/paletas/find/(:id)?', (req, res) => {
    const idParam = req.params.id;
    const unicaPaleta = paletas.find( (paleta) => paleta.id == idParam);
    console.log(unicaPaleta);
    if (unicapaleta === undefined) {
        res.send({ message: 'Nenhuma paleta foi encontrada' });
        }
    res.send(unicaPaleta);
    });

app.listen(porta, () => console.log(`Servidor rodando em http://localhost:${porta}`));
