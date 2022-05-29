import { useEffect, useState } from "react";
import '../index.css';
import { useParams, useNavigate } from "react-router"
import { getOnePokeInfo } from '../api/api'
import { PokemonType } from "../Types/PokemonType";

export const PokeInfoPage = () => {

    let params = useParams();
    let navig = useNavigate();

    const [pokemon, setPokemon] = useState<PokemonType>()

    useEffect(() => {
        getDetailedPokeInfo();
    }, [])


    const getDetailedPokeInfo = async () => {
        if (params.id) {
            let response = await getOnePokeInfo(parseInt(params.id));
            if (response) {
                console.log(response.data);
                let officialArtwork = response.data.sprites.other['official-artwork'];
                let frontDefault = officialArtwork['front_default']
                setPokemon({ id: response.data.id, name: response.data.name, url: `https://pokeapi.co/api/v2/pokemon/${response.data.id}`, img: frontDefault });

                //resultado
                //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png
            }
        }
    }

    const previousPokemon = () => {
        if (pokemon) {
            navig(`/pokemon/${pokemon.id - 1}`)
        }
    }

    const nextPokemon = () => {
        const previousPokemon = () => {
            if (pokemon) {
                navig(`http://localhost:3000/pokemon/${pokemon.id + 1}`)
            }
        }
    }

    return (
        <div className="d-flex justify-content-around align-items-center">

            {pokemon &&
                <div className="caixinhaLink">
                    <a className="linkPokeDetails" href={`/pokemon/${pokemon.id - 1}`}> Anterior </a>
                </div>
            }


            {pokemon &&
                <div className="d-flex flex-column justify-content-center align-items-center" style={{marginTop: '70px'}}>
                    <h2>{pokemon.id} - {pokemon.name}</h2>
                    <img className="mt-4" src={pokemon.img} alt="" style={{ width: '50%', height: '50%' }} />
                    <div className="caixinhaLink" style={{marginTop: '40px'}}>
                        <a className="linkPokeDetails" href="/">Inicio</a>
                    </div>
                </div>
            }

            {pokemon &&
                <div className="caixinhaLink">
                    <a className="linkPokeDetails" href={`/pokemon/${pokemon.id + 1}`}> Próximo </a>
                </div>
            }

        </div>
    )

}