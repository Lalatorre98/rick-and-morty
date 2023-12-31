import {useState} from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Episodes from './pages/Episodes/Episodes'
import About from './pages/About/About'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails'
import ThemeContextProvider from './contexts/ThemeContext'
import MyFavorites from './pages/MyFavorites/MyFavorites'
import FavoritesContextProvider from './contexts/FavoritesContext'




function App() {
//switches to different pages to be able to control what is in betweem(<Routes>)
  return (
    //shows where one is on the url, ex: ("https://url.com/(location)"")
   <BrowserRouter>
   <ThemeContextProvider>
    <FavoritesContextProvider>
    <Header />
    
    <Routes>
      
    <Route path='/' element={<Homepage />} />
    <Route path='/about' element={<About />} />
    <Route path='/episodes' element={<Episodes />} />
    <Route path='/details/:characterId' element={<CharacterDetails />} />
    <Route path='/favorites' element={<MyFavorites />} />

    </Routes>

    <Footer />
    </FavoritesContextProvider>
    </ThemeContextProvider>

   </BrowserRouter>
    
  )
}

export default App
