
import Card from './components/Card/Card';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import { Homepage } from './pages/Homepage/Homepage';
import { results } from './data/data'
import { useState } from 'react';
import { DetailsPage } from './pages/DetailsPage/DetailsPage';

function App() {

  const [characters, setCharacters] = useState ( results )
  const [image, setImage]                =useState("")
  const [name, setName]                  =useState("")
  const [species, setSpecies]            =useState("")
  const [query, setQuery]                =useState("")
  const [orderParam, setOrderParam]      =useState("")
  const [page, setPage]                  =useState("homepage")
  const [id, setId]                      =useState(0)

  const handleInputImage =      (event) => setImage (event.target.value)
  const handleInputName =       (event) => setName  (event.target.value)
  const handleInputSpecies =    (event) =>setSpecies(event.target.value)
  const handleInputQuery =      (event) =>setQuery  (event.target.value)
  const handleInputOrderParam = (event) =>setOrderParam (event.target.value)

  const changePage = (page, id) => 
  setPage(page)
  setId (id)

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

  const renderPage = () => {
    switch(page) {
      case 'homepage' :
        return <Homepage 
        characters={characters}
        states={{image, name, species, query, orderParam}}
        handlers={{handleInputImage, handleInputName, handleInputSpecies, handleInputQuery, handleInputOrderParam}}
        addCharacter= {addCharacter}
        removeCharacter={removeCharacter}
        changePage={changePage}
        />
      case 'detailspage' :
        return <DetailsPage
          characters={characters}
          id={id}
          changePage={changePage}
      />
    }
  }

  return (
    <div ClassName="App">
      <GlobalStyle/>
       {renderPage()}
    </div>
  );
}

export default App;
