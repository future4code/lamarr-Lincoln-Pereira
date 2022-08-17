
import Card from './components/Card/Card';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import { Homepage } from './pages/Homepage/Homepage';
import { results } from './data/data'
import { useState } from 'react';

function App() {

  const [characters, setCharacters] = useState ( results )
  const [image, setImage]      =useState("")
  const [name, setName]        =useState("")
  const [species, setSpecies]  =useState("")

  const handleInputImage =   (event) => setImage (event.target.value)
  const handleInputName =    (event) => setName  (event.target.value)
  const handleInputSpecies = (event) =>setSpecies(event.target.value)

  const addCharacter = (event) => {
    event.preventDefault()

    const newCharacter = {
      id: Date.now(),
      name,
      species,
      origin: {
      name: "Earth"
      },
      image
    }

    const newCharactersList = [...characters, newCharacter]
    setCharacters(newCharactersList)

    setImage("")
    setName("")
    setSpecies("")

  }

  const removeCharacter = (id) => {
    const filteredList = characters.filter (char =>{
      return char.id !== id
    })

    setCharacters(filteredList)
  }


  return (
    <div ClassName="App">
      <GlobalStyle/>
      <Homepage 
      characters={characters}
      states={{image, name, species}}
      handlers={{handleInputImage, handleInputName, handleInputSpecies}}
      addCharacter= {addCharacter}
      removeCharacter={removeCharacter}
      />      
      
    </div>
  );
}

export default App;
