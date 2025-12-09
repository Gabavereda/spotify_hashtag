import axios from "axios";

const URL = import.meta.env.DEV
  ? "http://localhost:3001/api" // quando rodando `npm run dev`
  : "https://spotify-hashtag-n2nv.onrender.com/api"; // quando buildado

// Carrega artistas
const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;
