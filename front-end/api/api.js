import axios from "axios";


// const { NODE_ENV } = process.env;
const URL = "http://localhost:3001/api";

// passa para o axios apos o tratamento com middleware
const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

// apos pegar os daddos, filtra o obj data que contem o que quero 
export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;

// console.log(responseSongs.data);