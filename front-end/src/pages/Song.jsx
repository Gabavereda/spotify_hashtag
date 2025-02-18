import React from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs';
import { artistArray } from '../assets/database/artists';

const Song = () => {
    const { id } = useParams();

    // Duas funcoes fazendo quase a mesa coisa em questao de resultado tratando se de buscar
    // um valor que nao esta na pagina em outra pagina porem filtrando os resultados

    // para buscar a musica atual
    const { image, name, duration, artist, audio } = songsArray.filter(
        (currentSongObj) => currentSongObj._id === id
    )[0];

    // para buscar o artsta desta maneira 
    const artistObj = artistArray.filter(
        (currentArtistObj) => currentArtistObj.name === artist
    )[0];

    const songsArrayFromArtist = songsArray.filter(
        (currentSongObj) => currentSongObj.artist === artist
    );

    const randomIndex = Math.floor(
        Math.random() * (songsArrayFromArtist.length - 1)
    );
    const randomIndex2 = Math.floor(
        Math.random() * (songsArrayFromArtist.length - 1)
    );

    const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
    const randomId2Artist = songsArrayFromArtist[randomIndex2]._id;

    return (
        <div className='song'>
            <div className="song__container">
                <div className="song__image-container">
                    <img
                        src={image}
                        alt={`fotoda musica ${name}`} />
                </div>
            </div>

            <div className="song__bar">
                <Link to={`/artists/${artistObj._id}`} className="song__artist-image">

                    <img
                        width={75}
                        height={75}
                        src={artistObj.image}
                        alt={`foto da musica ${artist}`}
                    />
                </Link>

                <Player
                    duration={duration}
                    randomIdFromArtist={randomIdFromArtist}
                    randomId2Artist={randomId2Artist}
                    audio={audio}
                />
                <div>
                    <p className="song__name">{name}</p>
                    <p>{artist}</p>
                </div>
            </div>
        </div>
    )
}

export default Song