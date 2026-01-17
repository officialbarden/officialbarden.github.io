import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Routes:
import Home from './pages/Home'
import GuiMaker from './pages/DatapackTools/GuiMaker'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gui-maker" element={<GuiMaker />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
