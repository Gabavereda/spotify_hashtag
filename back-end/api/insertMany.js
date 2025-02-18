import { artistArray } from "../../Front-End/src/assets/database/artists.js";
import { songsArray } from "../../Front-End/src/assets/database/songs.js";
import { db } from "./connect.js";


// cria uma copia do objeto
const newArtistArray = artistArray.map((currentArtistObj) => {

    // puxa todos os valores do obj com o spread
    const newArtistObj = { ...currentArtistObj };

    // deleta apenas o id do objeto
    delete newArtistObj.id

    return newArtistObj;
})




// cria uma copia do objeto
const newSongArray = songsArray.map((currentSongObj) => {

    // puxa todos os valores do obj com o spread
    const newSongObj = { ...currentSongObj };

    // deleta apenas o id do objeto
    delete newSongObj.id;

    return newSongObj;
});

 console.log(newSongArray);




// // INSERINDO NO MONGO

// // puxa o db >direciona para o songs > utiliza o  obj filtrado e insere no mongo
// const responseSongs = await db
//     .collection("songs")
//     .insertMany(newSongArray);

// const reponseArtists = await db
//     .collection("artists")
//     .insertMany(newArtistArray);

// // console.log(reponseArtists);
// // console.log(responseSongs);