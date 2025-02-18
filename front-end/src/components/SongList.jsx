import React from 'react';
import SongItem from './SongItem';
import { useState } from 'react';

const SongList = ({ songsArray }) => {
    const [items, setItems] = useState(5);
    return (
        <div className="song-list">

            {/* para buscar as musicas do artisa com numero menos de amostra de componetes
            filtra o valor atual dos obj e o ind menor alguma variavel atribuda
             mapeia o array com o objto atual mais o indice
             chama o componete com o spread atribuio index e a key*/}
            {songsArray
                .filter((currentValue, index) => index < items)
                .map((currentSongObj, index) => (
                    <SongItem {...currentSongObj} index={index} key={index}
                    />
                ))}
            <p className='song-list__see-more'
                onClick={() => {
                    setItems(items + 5)
                }}
            >
                Ver mais
            </p>
        </div >
    );
};

export default SongList;