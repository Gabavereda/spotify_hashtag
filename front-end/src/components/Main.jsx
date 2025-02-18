import React from 'react';
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs'


// esse type entra como aquele props para passar o paramentro para puxar o endpoint correto
const Main = ({ type }) => {
    return (
        <div className='main'>
            {/* /* recebe parametros do componente item-list = props'            
            Declarando o caminho endpoint em path
            esse operador ternario é para buscar o tipo de filtro a partir das pages */ }
            {type === "artists" || type === undefined ? (<ItemList
                title="Artistas"
                items={10}
                itemsArray={artistArray}
                path="/artists"
                idPath="/artist"
            />
            ) : (
                <></>
            )}

            {type === "songs" || type === undefined ? (<ItemList
                title="Músicas"
                items={20}
                itemsArray={songsArray}
                path="/songs"
                idPath="/song"
            />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Main;