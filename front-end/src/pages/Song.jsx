import React, { useEffect, useState } from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { getArtists, getSongs } from "../../api/api";

const Song = () => {
  const { id } = useParams();

  const [songObj, setSongObj] = useState(null);
  const [artistObj, setArtistObj] = useState(null);
  const [songsFromArtist, setSongsFromArtist] = useState([]);

  useEffect(() => {
    async function loadData() {
      const songs = await getSongs();
      const artists = await getArtists();

      const foundSong = songs.find((s) => s._id === id);
      setSongObj(foundSong);

      const foundArtist = artists.find((a) => a.name === foundSong.artist);
      setArtistObj(foundArtist);

      const filteredSongs = songs.filter(
        (s) => s.artist === foundSong.artist
      );
      setSongsFromArtist(filteredSongs);
    }

    loadData();
  }, [id]);

  if (!songObj || !artistObj) return <p>Carregando...</p>;

  const randomIndex1 = Math.floor(Math.random() * songsFromArtist.length);
  const randomIndex2 = Math.floor(Math.random() * songsFromArtist.length);

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={songObj.image} alt={songObj.name} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={artistObj.name}
          />
        </Link>

        <Player
          duration={songObj.duration}
          audio={songObj.audio}
          randomIdFromArtist={songsFromArtist[randomIndex1]?._id}
          randomId2FromArtist={songsFromArtist[randomIndex2]?._id}
        />

        <div>
          <p className="song__name">{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
