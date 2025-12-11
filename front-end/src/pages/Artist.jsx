import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { getArtists, getSongs } from "../../api/api";

const Artist = () => {
  const { id } = useParams();
  const [artistObj, setArtistObj] = useState(null);
  const [songsFromArtist, setSongsFromArtist] = useState([]);

  useEffect(() => {
    async function loadData() {
      const artists = await getArtists();
      const songs = await getSongs();

      const foundArtist = artists.find((a) => a._id === id);
      setArtistObj(foundArtist);

      const filteredSongs = songs.filter(
        (song) => song.artist === foundArtist?.name
      );
      setSongsFromArtist(filteredSongs);
    }

    loadData();
  }, [id]);

  if (!artistObj) return <p>Carregando...</p>;

  const randomIndex = Math.floor(Math.random() * songsFromArtist.length);
  const randomId = songsFromArtist[randomIndex]?._id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})`,
        }}
      >
        <h2 className="artist__title">{artistObj.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsFromArtist} />
      </div>

      <Link to={`/song/${randomId}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
