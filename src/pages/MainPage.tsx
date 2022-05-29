import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllPokeInfo, controlPage } from '../api/api';
import { PokemonType } from '../Types/PokemonType'
import { PokemonComponent } from '../components/PokeComponent';

export const MainPage = () => {
  const [pokemon, setPokemons] = useState<PokemonType[]>([]); //mto importante essa linha. estou pegando um array de Pokemons
  const [actualPage, setActualPage] = useState(20);

  const getPokeApi = async () => {
    let resultado = await getAllPokeInfo();
    if (resultado) {
      console.log(resultado);
      setPokemons(resultado.data.results)
    }
  }

  useEffect(() => { getPokeApi() }, [])


  const previousPage = async () => {

    if (actualPage === 0) {
      alert('Não é possível voltar mais páginas');
      setActualPage(20);
      return;
    }

    if (actualPage > 0) {
      let response = await controlPage(actualPage - 20);
      if (response) {
        setActualPage(actualPage - 20);
        setPokemons(response.data.results);
      } else {
        console.log('deu tilts');
      }

    }
  }

  const nextPage = async () => {

    let response = await controlPage(actualPage + 20);
    if (response) {
      setActualPage(actualPage + 20);
      setPokemons(response.data.results);
    } else {
      console.log('deu tilts');
    }
  }



  return (
    <>

      <div className='container d-flex flex-column justify-content-center'>
        <div className="row" style={{marginTop: "60px"}}>
          {pokemon.map((item) => {
            return (
              <div className="col-md-3">
                <PokemonComponent id={item.id} name={item.name} url={item.url}></PokemonComponent>
              </div>
            )
          })}
        </div>
        <div className='buttons d-flex flex-row justify-content-center'>
          <button className='w-25 mx-2 mt-2' onClick={() => { previousPage() }}>Voltar</button>
          <button className='w-25 mx-2 mt-2' onClick={() => { nextPage() }}>Próxima</button>
        </div>
      </div>


    </>
  )
}
