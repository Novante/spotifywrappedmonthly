import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import StatsPage from "./pages/StatsPage";
import {useState} from "react";
import ScrollPage from "./pages/ScrollPage";

function App() {
    const [artist, setArtist] = useState('')
    const [songs, setSongs] = useState('')
    const [token, setToken] = useState('')

    const [fetchedArtist, setFetchedArtist] = useState(null)
    const [fetchedRelatedArtists, setFetchedRelatedArtists] = useState(null)
    const [fetchedTopTracks, setFetchedTopTracks] = useState(null)


    return (
      <BrowserRouter>
          <div>
          <Routes>
              <Route path="/" element={<Homepage fetchedTopTracks={fetchedTopTracks} setFetchedTopTracks={setFetchedTopTracks} fetchedRelatedArtists={fetchedRelatedArtists} fetchedArtists={fetchedArtist} setFetchedArtist={setFetchedArtist} setFetchedRelatedArtists={setFetchedRelatedArtists} token={token} setToken={setToken} artist={artist} setArtist={setArtist} songs={songs} setSongs={setSongs}/>}/>
              <Route path="/stats" element={<StatsPage fetchedTopTracks={fetchedTopTracks} fetchedRelatedArtists={fetchedRelatedArtists} fetchedArtist={fetchedArtist}/>}/>
          </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App;
