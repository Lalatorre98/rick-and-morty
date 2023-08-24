import {useState} from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Episodes from './pages/Episodes/Episodes'
import About from './pages/About/About'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails'

function App() {
//switches to different pages to be able to control what is in betweem(<Routes>)
  return (
    //shows where one is on the url, ex: ("https://url.com/(location)"")
   <BrowserRouter>
    <Header />
    
    <Routes>
      
    <Route path='/' element={<Homepage />} />
    <Route path='/about' element={<About />} />
    <Route path='/episodes' element={<Episodes />} />
    <Route path='/details/:characterId' element={<CharacterDetails />} />

    </Routes>

    <Footer />

   </BrowserRouter>
    
  )
}

export default App
