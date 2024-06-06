import express from "express";
import connectDatabase from "./Config/dbconect.js";
//import vaga from "./models/vagas.js"; --- nao precisa importar modelo de vaga
import cors from "cors";
import routes from "./routes/index.js";

const conexao = await connectDatabase();

conexao.on("error", (erro) => {
  console.log("Erro de conexão", erro);
});
conexao.on("open", () => {
  console.log("Conexão com o banco de dados ok");
});

const app = express();
app.use(express.json());

app.use(cors({origin: "*"}))
routes (app);

export default app;
