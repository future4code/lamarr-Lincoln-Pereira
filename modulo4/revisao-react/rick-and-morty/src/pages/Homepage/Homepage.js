import Card from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { HomePageContainer } from "./style";

export function Homepage (props) {

    const { characters } = props

    const renderList = characters.map(char =>{
        return (
            <Card key={char.id}
                img={char.image}
                name={char.name}
                species={char.species}
            />
        )

    })
    return (
        
        <HomePageContainer>
            <Header/>

            <main>
                {renderList}            
            </main>
        </HomePageContainer>
    )
}