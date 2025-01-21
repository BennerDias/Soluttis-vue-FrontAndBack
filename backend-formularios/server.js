// server.js - Arquivo principal para iniciar o servidor
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();

// Middlewares globais
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Rotas
app.use("/api", routes);

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
