
import Card from './components/Card/Card';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import { Homepage } from './pages/Homepage/Homepage';
import { results } from './data/data'
import { useState } from 'react';

function App() {

  const [characters, setCharacters] = useState ( results )

  const addCharacter = () => {
    const newCharacter = {
      "id": 20,
      "name": "Rick Sanchez",
      "species": "Human",
      "origin": {
          "name": "Earth"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg"
    }

    const newCharactersList = [...characters, newCharacter]
    setCharacters(newCharactersList)

  }

  return (
    <div ClassName="App">
      <GlobalStyle/>
      <Homepage characters={characters}/>      
      
    </div>
  );
}

export default App;
