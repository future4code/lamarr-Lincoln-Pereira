import { CardContainer } from "./styles";

function Card () {
    return (
        <CardContainer>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt=""/>
            <h2>Nome</h2>
            <p>Descricao</p>
        </CardContainer>
    )
}

export default Card;