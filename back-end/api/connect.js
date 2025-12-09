import { MongoClient } from "mongodb";

const URI = process.env.MONGO_URI;

if (!URI) {
  console.error("❌ ERRO: MONGO_URI não encontrada no ambiente!");
}

const client = new MongoClient(URI);

try {
  await client.connect();
  console.log("✅ Conectado ao MongoDB com sucesso!");
} catch (err) {
  console.error("❌ Erro ao conectar ao MongoDB:", err);
}

export const db = client.db("spotifyAula");
