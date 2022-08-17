import { useState } from "react";
import Card from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { HomePageContainer } from "./style";

export function Homepage (props) {

    const { characters } = props
    const { image, name, species } = props.states
    const { handleInputImage,handleInputName,handleInputSpecies } = props.handlers
    const { addCharacter } = props
    const { removeCharacter } = props

    const renderList = characters.map(char =>{
        return (
            <Card key={char.id}
                id={char.id}
                img={char.image}
                name={char.name}
                species={char.species}
                removeCharacter={removeCharacter}
            />
        )

    })



    return (
        
        <HomePageContainer>
            <Header/>

            <form>
                <label htmlFor="image">Image:</label>
                <input 
                type="text" 
                id="image"
                onChange={handleInputImage}
                value={image}
                />

                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                id="name"
                onChange={handleInputName}
                value={name}
                />

                <label htmlFor="species">Especie:</label>
                <input 
                type="text" 
                id="species"
                onChange={handleInputSpecies}
                value={species}
                />
                
                <button onClick={addCharacter}>Criar</button>
            </form>

            <main>
                {renderList}            
            </main>
        </HomePageContainer>
    )
}