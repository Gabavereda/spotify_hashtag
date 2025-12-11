import express from "express";
import cors from "cors";
import path from "path";
import { db } from "./connect.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const __dirname = path.resolve();

// ARQUIVOS ESTÁTICOS
app.use("/public", express.static(path.join(__dirname, "public")));

// ENDPOINTS
app.get("/api/", (req, res) => {
  res.send("Use os endpoints /api/artists e /api/songs");
});

app.get("/api/artists", async (req, res) => {
  try {
    const list = await db.collection("artists").find({}).toArray();
    res.send(list);
  } catch (e) {
    res.status(500).send({ error: "Erro ao buscar artistas" });
  }
});

app.get("/api/songs", async (req, res) => {
  try {
    const list = await db.collection("songs").find({}).toArray();
    res.send(list);
  } catch (e) {
    res.status(500).send({ error: "Erro ao buscar músicas" });
  }
});

// FRONT-END BUILD DO VITE
app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
