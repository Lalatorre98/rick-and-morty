import React, {useContext} from 'react'
import './MyFavorites.css'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import { ThemeContext } from '../../contexts/ThemeContext';



function MyFavorites() {
    //change to use global state
  //NOTE {} NOT []
  const {darkMode, setDarkMode}= useContext(ThemeContext)

   //need access to global context
  //NOTE {} not[]
  
  const {favorites} =useContext(FavoritesContext)
  
  return (
    
    <div className={darkMode?"favorites-container favorites-dark":"favorites-container"}>
        <h1>MyFavorite Characters</h1>
        <div className="favorite-characters">
        {
            favorites.length > 0?
            favorites.map(item=><CharacterCard character={item}
                key={item.id} />)
                :
                <p>You have not selected any favorites yet</p>
        }
        </div>
        </div>
  )
}

export default MyFavorites