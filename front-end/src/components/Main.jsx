import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getArtists, getSongs } from "../../api/api";

const Main = ({ type }) => {
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function loadData() {
      const a = await getArtists();
      const s = await getSongs();
      setArtists(a);
      setSongs(s);
    }
    loadData();
  }, []);

  return (
    <div className="main">

      {/* Lista de Artistas */}
      {(type === "artists" || type === undefined) && (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artists}
          path="/artists"
          idPath="/artist"
        />
      )}

      {/* Lista de Músicas */}
      {(type === "songs" || type === undefined) && (
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songs}
          path="/songs"
          idPath="/song"
        />
      )}
    </div>
  );
};

export default Main;
