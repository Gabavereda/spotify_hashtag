import axios from "axios";

const URL = "https://spotify-hashtag-n2nv.onrender.com/api";

export async function getArtists() {
  const response = await axios.get(`${URL}/artists`);
  return response.data;
}

export async function getSongs() {
  const response = await axios.get(`${URL}/songs`);
  return response.data;
}
