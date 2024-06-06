// Arquivo de rotas da aplicação
import express from "express"
import vagasController from '../controllers/vagasControllers.js'

//metodo especifico  para gestão de rotas
const routes = express.Router();

//passar a rota e controller como parametro
routes.get("/futbol", vagasController.listarfutbol);
routes.get("/futbol/:id", vagasController.listarfutbolPorId);
routes.post("/futbol", vagasController.cadastrarfutbol);
routes.put("/Futbol/:id", vagasController.cadastrarfutbol);

export default routes;