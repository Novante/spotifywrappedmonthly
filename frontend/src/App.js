import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import StatsPage from "./pages/StatsPage";
import {useState} from "react";
import ScrollPage from "./pages/ScrollPage";

function App() {
    const [artist, setArtist] = useState('')
    const [songs, setSongs] = useState('')

  return (
      <BrowserRouter>
          <div>
          <Routes>
              <Route  path="/" element={<Homepage artist={artist} setArtist={setArtist} songs={songs} setSongs={setSongs}/>}/>
              <Route path= "/stats" element={<StatsPage artist={artist} setArtist={setArtist} songs={songs} setSongs={setSongs}/>} />
              <Route path="/scroll" element={<ScrollPage artist={artist} songs={songs}/>}/>
          </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App;
