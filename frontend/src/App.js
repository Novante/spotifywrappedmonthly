import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import StatsPage from "./pages/StatsPage";
import {useState} from "react";

function App() {
    const [artist, setArtist] = useState('')
    const [songs, setSongs] = useState('')

  return (
      <BrowserRouter>
          <div className="pageContainer">
          <Routes>
              <Route  path="/" element={<Homepage artist={artist} setArtist={setArtist} songs={songs} setSongs={setSongs}/>}/>
              <Route path= "/stats" element={<StatsPage artist={artist} setArtist={setArtist} songs={songs} setSongs={setSongs}/>} />
          </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App;
