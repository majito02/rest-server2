const express = require('express');

const categoria = require("./router/Categorias");
const producto = require("./router/productos");
const app = express();
const cors = require("cors");
require('dotenv').config();
require("./database/config").dbConnection();
app.use(express.json());

app.use(cors());
app.use("/categoria", categoria);
app.use("/producto", producto);

app.listen(process.env.PORT, () => {
console.log('Servidor iniciado en http://localhost:3000');
});