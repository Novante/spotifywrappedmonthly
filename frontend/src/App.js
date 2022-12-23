import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";

function App() {
  return (
      <BrowserRouter>
          <div className="pageContainer">
          <Routes>
              <Route path="/" element={<Homepage/>}/>
          </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App;
