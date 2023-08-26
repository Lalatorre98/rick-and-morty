import React, {useEffect, useContext} from 'react'
import './Episodes.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import { ThemeContext } from '../../contexts/ThemeContext';



function Episodes() {
  //change to use global state
  //NOTE {} NOT []
  const {darkMode, setDarkMode}= useContext(ThemeContext)
  //when the user chooses an episode number,the page shows the info  
 // and characters about that episode

 //create state to hold the option numbers
 const[options, setOptions] =React.useState([])
 //create state to hold option
 const [selectedOption, setSelectedOption]= React.useState(1)
 //create state for episode data
 const [selectedEpisode, setSelectedEpisode]=React.useState('')
 //create state for the characters
 const[characterList, setCharacterList]= React.useState([])

  //I need to find how many episodes there are in order to build the 
 //dropdown element
//https://rickandmortyapi.com/api/episode

  useEffect(
    ()=>{
      //make api call to find out number of episodes
      axios.get(`https://rickandmortyapi.com/api/episode`)
      .then(res=>{
        console.log(res.data.info.count)
        //I need to create an array with [1,2,...51]
        const nums= []
        for(let i=1; i<=res.data.info.count; i++){
          nums.push(i)
        }
        //console.log(nums)
        //store in state
        setOptions(nums)
      })
      .catch(err => console.log(err))
      //fetchEpisodeData()
    }, []
  )

  //will let you know in the console 'select episode'
  //if selected episode 5, it will say 'Episode 5' in the console
  
  const handleSelectChange=(e)=>{
    console.log(e.target.value)//will show only the episode and number
    //store this value in state
    setSelectedOption(e.target.value)
    //call the function here to get data from the api
    //fetchEpisodeData()
  }

  useEffect(
    ()=>{
      console.log('you selected', selectedOption)
      //call function to get data from api
      fetchEpisodeData()
    }, [selectedOption] //runs anytime this state changes
  )

    //https://rickandmortyapi.com/api/episode/28

    const fetchEpisodeData =async() => {
      console.log('fetch data')
      try{
        //make api call for this episode
      const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`)
      //console.log(res.data)
      //this is my episode data, need to store it in state
      setSelectedEpisode(res.data)
      //now need to make api calls for all the characters
      //console.log(res.data.characters)
      //gather the data from all these api calls to show the cards 
      const episodeCharacters = await Promise.all(
        res.data.characters.map(url =>{
          return axios.get(url).then(res => res.data)
        })
      )
      console.log(episodeCharacters)
      //store this in state
      setCharacterList(episodeCharacters)
      }

      catch(err){
        console.log(err)
      }
    }

  return (
    <div className={darkMode?"episodes-container episodes-dark":"episodes-container"}>
      <div>
      <label htmlFor="select-episode">Select an Episode</label>
      <select id='select-episode' onChange={handleSelectChange}>
        {
          //created a list of numbers to show with a dropdown menu
          options.map(num => <option key={num} value={num}>{`Episode ${num}`}</option>)
          //the key and value will only show the number of the episode in the console
        }
      </select>
      </div>

      <div>
        <div className="episode-info">
        <p>Episode Name: {selectedEpisode?.name}</p>
        <p>Air Date: {selectedEpisode?.air_date}</p>
        </div>
        <div className="character-container">
          {
            characterList.map(item=><CharacterCard character={item}
              key={item.id} />)
          }
        </div>

      </div>
    </div>
  )
}

export default Episodes