import { createContext, useContext, useEffect, useState } from "react";
import { getArtists, getSongs } from "/api/api.js";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAll() {
      const apiArtists = await getArtists();
      const apiSongs = await getSongs();

      setArtists(apiArtists);
      setSongs(apiSongs);
      setLoading(false);
    }

    loadAll();
  }, []);

  return (
    <DataContext.Provider value={{ artists, songs, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
