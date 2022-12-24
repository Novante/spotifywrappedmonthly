import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Test from "./pages/Test";

function App() {


  return (
      <BrowserRouter>
          <div className="pageContainer">
          <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/test" element={<Test/>}/>
          </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App;
