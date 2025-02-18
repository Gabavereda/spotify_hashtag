import { MongoClient } from 'mongodb';

// pega url do site do cluster
// TODO: ADD AO GITIGNORE 
const URI = "mongodb+srv://gabavereda:285072Gaba@cluster0.wumo9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// instancia O CLIENTE
const client = new MongoClient(URI);

//cria a ponte entre a classe e o url
// exporta para usar na server
export const db = client.db("spotifyAula");

// declara uma cons para a colecao em db, tratando ela como array

const songCollection = await db.collection("songs").find({}).toArray();

// javascript assincrono pesquisar depois 
// await and async
// Fullfilled

console.log(songCollection);