import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGO_URI;

if (!URI) {
  throw new Error("ERRO: MONGO_URI não encontrada no .env ou no Render");
}

const client = new MongoClient(URI);

await client.connect();
console.log("MongoDB conectado com sucesso!");

export const db = client.db("spotifyAula");
