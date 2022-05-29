import { Link } from 'react-router-dom'


type Props = {
    id: number,
    name: string,
    url: string
}


export const PokemonComponent = ({ name, id, url}: Props) => {

    let arrayURL = url.split('/');
    id = parseInt(arrayURL[6])

    return (
        <Link className='linkPokeComponent' to={`/pokemon/${id}`}>
            <div className='pokeComponent' key={id}>{name}</div>
        </Link>

    )
}