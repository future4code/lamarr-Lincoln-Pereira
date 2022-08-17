import { CardContainer } from "./styles";

function Card (props) {
    const { img, name, species, id } = props
    const { removeCharacter } = props
    return (
        <CardContainer>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{species}</p>
            <button onClick={() => removeCharacter(id)}> Remover</button>
        </CardContainer>
    )
}

export default Card;