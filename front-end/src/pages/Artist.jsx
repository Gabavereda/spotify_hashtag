import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SongList from '../components/SongList';
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  // mais um exemplo de logica pra puxar o que deve ser exibido atraves do id obtido da rota
  const { id } = useParams();

  const { name, banner } = artistArray.filter(
    (currentArtistObj) => currentArtistObj._id === id
  )[0];
  // novamente usando o metodo de buscar no array filtrando so que desta vez atraves do nome do artista
  // busca do json destrutura para apenas pegar o nome e iterar como equals
  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name
  );

  // CRiando o shuffle

  //  cria uma logica para um index aleatorio
  // declara a const > utiliza a funcao de arredondadar
  // chama a funcao de random multiplica para dar numero do index
  // puxa o tamanho do array e -1 para pegar de 0 a 9
  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  //  cria um const puxa um objeto do array que ja foi filtrado
  // joga a logica com  extensao do id
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;



  {/* logica para pegar o banner do artista, lembra bastante 
    como se trabalha com jdbc --java
    criar um objeto e depois so declara ele e seu atributo */}

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        {/* passando a prop para o component e no file do componente passar a prop no atributo videe LINE17 */}
        <SongList songsArray={songsArrayFromArtist} />
      </div>

      {/* aqui entra a logica de filtra o endpoint do player para sempre dar aleatorio */}
      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;